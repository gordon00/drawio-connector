import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountPathExplorerComponent } from './mount-path-explorer.component';

describe('MountPathExplorerComponent', () => {
  let component: MountPathExplorerComponent;
  let fixture: ComponentFixture<MountPathExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountPathExplorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountPathExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
