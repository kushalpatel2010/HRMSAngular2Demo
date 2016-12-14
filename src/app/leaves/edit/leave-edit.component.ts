import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Leave } from './../leave';
import { LeaveService } from './../leave.service';

@Component({
    selector: 'leave-edit',
    templateUrl: 'leave-edit.component.html'
})
export class LeaveEditComponent implements OnInit {
    leave: Leave = new Leave();
    leaveType: string = 'Casual';
    leaveTypes = ['Casual', 'Medical'];

    constructor(
        private leaveService: LeaveService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        if (this.route.params['id']) {
            let id = this.route.params['id'];
            this.leaveService.getLeaveById(id).then(leave => {
                this.leave = leave;
            });
        }
        else {
            this.leave.leaveType = 'Casual';
        }
        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.leaveService.getLeaveById(id).then(leaves => {
        //         this.leave = leaves
        //     });
        // });
    }
    onSubmit(): void {
        console.log(JSON.stringify(this.leave));
    }
    get diagnostic() { return JSON.stringify(this.leave); }
}