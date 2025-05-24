import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
// import { ReplacePipe } from '../../../shared/pipes/replace.pipe';

import form from './relatorio-cru';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseGenericoService } from '../../../core/services/base-generico.service';
import { Observable, startWith, map } from 'rxjs';

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY'
    }
};


@Component({
    selector: 'app-form',
    imports: [
        CommonModule,
        MatExpansionModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatAutocompleteModule,
        MatIconModule,
        // ReplacePipe
    ],
    providers: [{
        provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
    }],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
    standalone: true
})
export class FormComponent implements AfterViewInit, OnInit {

    public id: string = '';
    public form: any = [];
    public isMobile: boolean = false;

    public lst_pacientes: any[] = [];
    public lst_doutores: any[] = [];


    public pacientesFiltrados$: Observable<any> = new Observable<any>();
    public doutoresFiltrados$: Observable<any> = new Observable<any>();

    public pacienteSelecionadoNome: string = '';
    public pacienteSelecionadoId: string | null = null;

    public formProntuario = new UntypedFormGroup({
        data: new UntypedFormControl(new Date().toISOString()),
        entrevistado: new UntypedFormControl('', [Validators.required]),
        dr_entrevistador: new UntypedFormControl(null, [Validators.required]),
    })

    public hasCache: boolean = false;
    private cacheKey = 'formProntuarioDtoCache';
    public showCacheDialog: boolean = false;



    constructor(
        private activeRouter: ActivatedRoute,
        private http: BaseGenericoService,
        private toast: ToastrService,
        private router : Router
    ) { }

    ngOnInit(): void {
        // Verifica se há cache de DTO para novo formulário
        if (!this.id && localStorage.getItem(this.cacheKey)) {
            this.hasCache = true;
            this.showCacheDialog = true;
        } else {
            this.hasCache = false;
        }
        this.activeRouter.params.subscribe((params: any) => {
            if (params['id']) {
                this.id = params['id'];
                this.carregarProntuario();
            } else {
                this.form = this.preprocessForm(form);
            }
            this.carregarPacientes();
            this.carregarDoutores();
        })
        this.pacientesFiltrados$ = this.entrevistadoControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterPacientes(value || ''))
        );
        this.doutoresFiltrados$ = this.avaliadorControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterDoutores(value || ''))
        );
    }

    onCacheDialogAction(keep: boolean) {
        if (keep) {
            this.recuperarCacheDto();
        } else {
            this.clearCacheDto();
        }
        this.showCacheDialog = false;
    }

    private saveCacheDto(dto: any) {
        localStorage.setItem(this.cacheKey, JSON.stringify(dto));
        this.hasCache = true;
    }

    private recuperarCacheDto() {
        const cache = localStorage.getItem(this.cacheKey);
        if (cache) {
            try {
                const dto = JSON.parse(cache);
                this.formProntuario.patchValue({
                    data: dto.data_avaliacao,
                    entrevistado: dto.entrevistado,
                    dr_entrevistador: dto.dr_entrevistador
                });
                if (dto.dados_personalizados) {
                    this.form = dto.dados_personalizados;
                }
                this.toast.success('Dados recuperados do rascunho!');
                this.clearCacheDto(); // Limpa o cache após recuperar
            } catch (e) {
                this.toast.error('Erro ao recuperar dados do rascunho!');
            }
        }
        this.hasCache = false;
    }

    private clearCacheDto() {
        localStorage.removeItem(this.cacheKey);
        this.hasCache = false;
    }

    get avaliadorControl(): UntypedFormControl {
        return this.formProntuario.get('dr_entrevistador') as UntypedFormControl;
    }

    get entrevistadoControl(): UntypedFormControl {
        return this.formProntuario.get('entrevistado') as UntypedFormControl;
    }

    carregarProntuario() {
        this.http.get(`api/v1/prontuarios/${this.id}`).subscribe((resposta: any) => {
            console.log('Prontuario==>>', resposta);
            this.formProntuario.patchValue({
                data: resposta.data_avaliacao,
                entrevistado: resposta.entrevistado,
                dr_entrevistador: resposta.dr_entrevistador,
            });
            this.form = resposta.dados_personalizados;
            this.form = this.preprocessForm(this.form);
        });
    }

    preprocessForm(form: any[]): any[] {
        return form.map(section => ({
            ...section,
            sectionClean: this.cleanString(section.section)
        }));
    }

    carregarPacientes() {
        this.http.get(`api/v1/pacientes`).subscribe((resposta: any) => {
            console.log('Pacientes==>>', resposta);
            this.lst_pacientes = resposta;
        });
    }

    carregarDoutores() {
        this.http.get(`api/v1/doutores`).subscribe((resposta: any) => {
            console.log('Drs==>>', resposta);
            this.lst_doutores = resposta;
        });
    }

    cleanString(str: string): string {
        if (!str) return '';
        // Remove acentos e caracteres especiais da língua portuguesa
        let s = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        // Substitui cedilha
        s = s.replace(/ç/g, 'c').replace(/Ç/g, 'C');
        // Substitui ã/Ã, õ/Õ, â/Â, ê/Ê, ô/Ô, á/Á, é/É, í/Í, ó/Ó, ú/Ú, à/À, ü/Ü, ñ/Ñ, etc.
        s = s.replace(/ã/g, 'a').replace(/Ã/g, 'A');
        s = s.replace(/õ/g, 'o').replace(/Õ/g, 'O');
        s = s.replace(/â/g, 'a').replace(/Â/g, 'A');
        s = s.replace(/ê/g, 'e').replace(/Ê/g, 'E');
        s = s.replace(/ô/g, 'o').replace(/Ô/g, 'O');
        s = s.replace(/á/g, 'a').replace(/Á/g, 'A');
        s = s.replace(/é/g, 'e').replace(/É/g, 'E');
        s = s.replace(/í/g, 'i').replace(/Í/g, 'I');
        s = s.replace(/ó/g, 'o').replace(/Ó/g, 'O');
        s = s.replace(/ú/g, 'u').replace(/Ú/g, 'U');
        s = s.replace(/à/g, 'a').replace(/À/g, 'A');
        s = s.replace(/ü/g, 'u').replace(/Ü/g, 'U');
        s = s.replace(/ñ/g, 'n').replace(/Ñ/g, 'N');
        // Remove qualquer outro caractere especial e espaços
        s = s.replace(/[^a-zA-Z0-9]/g, '');
        return s;
    }

    ngAfterViewInit(): void {
        this.getDisplayResolution();
    }

    getDisplayResolution() {
        const width = window.innerWidth;
        if (width <= 768) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
    }

    salvar() {
        if (!this.formProntuario.valid) {
            this.toast.error('Preencha todos os campos obrigatórios!');
            return;
        }
        const dto = {
            data_avaliacao: this.formProntuario.get('data')?.value,
            entrevistado: this.formProntuario.get('entrevistado')?.value,
            dr_entrevistador: this.formProntuario.get('dr_entrevistador')?.value,
            avaliador: this.formProntuario.get('entrevistador_id')?.value,
            dados_personalizados: this.form
        }
        if (this.id) { //UPDATE
            this.http.put(`api/v1/prontuarios/${this.id}`, dto)
                .subscribe({
                    next: (resposta) => {
                        this.toast.success('Prontuário atualizado com sucesso!');
                        this.router.navigate(['/admin/form-print', this.id]);
                    },
                    error: (error) => {
                        this.toast.error('Erro ao atualizar prontuário!');
                        this.saveCacheDto(dto); // Salva DTO no cache em caso de erro
                    }
                });
        } else { //CREATE
            this.http.post('api/v1/prontuarios', dto).subscribe({
                next: (value) => {
                    this.toast.success('Prontuário criado com sucesso!');
                    this.router.navigate(['/admin/form-print', value.id]);
                    this.clearCacheDto();
                },
                error: (err) => {
                    this.toast.error('Erro ao criar prontuário!');
                    this.saveCacheDto(dto); // Salva DTO no cache em caso de erro
                }
            });
        }
    }

    private _filterPacientes(value: string): any[] {
        const filterValue = value ? value.toLowerCase() : '';
        return this.lst_pacientes.filter(option => option.nome.toLowerCase().includes(filterValue));
    }

    private _filterDoutores(value: string): any[] {
        const filterValue = value ? value.toLowerCase() : '';
        return this.lst_doutores.filter(option => option.nome.toLowerCase().includes(filterValue));
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.getDisplayResolution();
    }
}
