import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AdsCardComponent } from "./ads-card.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AdsCardComponent", () => {

  let fixture: ComponentFixture<AdsCardComponent>;
  let component: AdsCardComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AdsCardComponent]
    });

    fixture = TestBed.createComponent(AdsCardComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
