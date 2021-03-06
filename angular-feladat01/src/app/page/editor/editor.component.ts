import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  user: User = new User();
  serverError = '';

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap(params => this.userService.get(params.id))
    )
      .pipe(take(1))
      .subscribe(
        user => {
          this.user = (user as User);
          this.user.password = '';
        }
      );
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({ id: this.user.id }, ngForm.value);
    this.userService.update(putObject)
      .toPromise().then(
        user => history.back(),
        err => {
          this.serverError = err.error;
          const to = setTimeout(() => {
            clearTimeout(to);
            this.serverError = '';
          }, 3000);
        }
      );

  }

}
