import { NgxSpinnerService } from 'ngx-spinner';
import { ConfigurationProjectService } from './services/configuration-project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastService } from '../shared/service/toast.service';
import { Project } from './models/project-model';

@Component({
  selector: 'app-configuration-project',
  templateUrl: './configuration-project.component.html',
  styleUrls: ['./configuration-project.component.scss']
})
export class ConfigurationProjectComponent implements OnInit {

  formProject: FormGroup;
  //#region  Gets and Setters

  get form() {
    return this.formProject;
  }

  get url() {
    return this.form.get('url').value;
  }

  set url(value) {
    this.form.get('url').setValue(value);
  }

  get name() {
    return this.form.get('name').value;
  }

  set name(value) {
    this.form.get('name').setValue(value);
  }

  get personalAccessToken() {
    return this.form.get('personalAccessToken').value;
  }

  set personalAccessToken(value) {
    this.form.get('personalAccessToken').setValue(value);
  }

  //#endregion

  constructor(
    private fb: FormBuilder,
    private projectService: ConfigurationProjectService,
    private toastService: ToastService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getInformation();
  }

  createForm() {
    this.formProject = this.fb.group({
      url: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      personalAccessToken: new FormControl('', [Validators.required])
    });

  }

  getInformation() {
    this.spinner.show();
    this.projectService.getProject()
      .subscribe((result) => {
        this.url = result.url;
        this.name = result.name;
        this.personalAccessToken = result.personalAccessToken;
        this.spinner.hide();
      });
  }

  Save() {
    this.spinner.show();
    const project = new Project();
    project.name = this.name;
    project.url = this.url;
    project.personalAccessToken = this.personalAccessToken;

    this.projectService.create(project)
      .subscribe((result) => {
        this.toastService.showSuccess();
        this.spinner.hide();
      }, (exc) => {
        exc.error.forEach(key => {
          this.toastService.showDanger(`${key.property} : ${key.message}`);
          this.spinner.hide();
        });
      });
  }

  clean() {
    this.form.reset();
  }

}
