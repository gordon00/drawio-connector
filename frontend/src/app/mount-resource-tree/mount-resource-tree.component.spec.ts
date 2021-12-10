import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountResourceTreeComponent } from './mount-resource-tree.component';

describe('MountResourceTreeComponent', () => {
  let component: MountResourceTreeComponent;
  let fixture: ComponentFixture<MountResourceTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountResourceTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountResourceTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
