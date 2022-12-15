
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlatformDetectorService } from '../plataform-detector/plataform-detector.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-cadastar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastrarForm: FormGroup;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) {}

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      email: ['',
          [
            Validators.required,
            Validators.email
          ]
      ],
      nickname: ['',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(55)
          ]
      ],
      status: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(55)
      ]
    ],
    password: ['', Validators.required]
    })
    }

  //user: User = new User
  //confirmarSenha: string
  //tipoUsuario: string

  // constructor(
  //   private authService: AuthService,
  //   private router: Router,
  //   private alertas: AlertasService
  // ) { }



  // confirmSenha(event: any) {
  //   this.confirmarSenha = event.target.value
  // }

  // tipoUser(event: any){
  //   this.tipoUsuario = event.target.value
  // }

  cadastrar(){
    const email = this.cadastrarForm.get('email')?.value;
    const nickname = this.cadastrarForm.get('nickname')?.value;
    const status = this.cadastrarForm.get('status')?.value;
    const password = this.cadastrarForm.get('password')?.value;

    this.authService.cadastrar(email,nickname,status, password).then((data) => {
      if (data['id'] === undefined ) {
        alert('Falha ao cadastrar');
    }
    else {
      const id = data.id;
      const nickname = data.nickname;
      localStorage.setItem("id", id);
      localStorage.setItem("nickname", nickname);
      this.router.navigate(['/entrar']);
    }
    })
  //   this.user.tipo = "o"

  //   if(this.user.senha != this.confirmarSenha){
  //     this.alertas.showAlertDanger('A senhas estão incorretas.')
  //   } else {
  //     this.authService.cadastrar(this.user).subscribe((resp: User) => {
  //       this.user = resp
  //       this.router.navigate(['/entrar'])
  //       this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
  //     })
  //   }

   }

}