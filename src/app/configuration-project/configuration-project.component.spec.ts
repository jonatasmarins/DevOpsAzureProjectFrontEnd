import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationProjectComponent } from './configuration-project.component';

describe('ConfigurationProjectComponent', () => {
  let component: ConfigurationProjectComponent;
  let fixture: ComponentFixture<ConfigurationProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
