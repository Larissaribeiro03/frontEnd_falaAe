import { Component, Input } from "@angular/core";

@Component ({
    selector: 'ap-alertas',
    templateUrl: './alertas.component.html'
})

export class AlertasComponent {
    @Input() text = '';
}
