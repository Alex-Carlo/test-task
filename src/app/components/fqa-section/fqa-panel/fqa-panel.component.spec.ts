import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FqaPanelComponent } from "./fqa-panel.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FqaPanelComponent", () => {

  let fixture: ComponentFixture<FqaPanelComponent>;
  let component: FqaPanelComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FqaPanelComponent]
    });

    fixture = TestBed.createComponent(FqaPanelComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
