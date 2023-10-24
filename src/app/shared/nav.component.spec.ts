import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NavComponent } from "./nav.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NavComponent", () => {

  let fixture: ComponentFixture<NavComponent>;
  let component: NavComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NavComponent]
    });

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
