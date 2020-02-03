import { async, TestBed } from '@angular/core/testing';
import { MeuPrimeiro2Component } from './meu-primeiro2.component';
describe('MeuPrimeiro2Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MeuPrimeiro2Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MeuPrimeiro2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=meu-primeiro2.component.spec.js.map