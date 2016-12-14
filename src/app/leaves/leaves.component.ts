import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Leave } from './leave';
import { LeaveService } from './leave.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  leaves: Leave[] = [];
  approvedLeaves: Leave[] = [];
  pendingLeaves: Leave[] = [];

  constructor(
    private router: Router,
    private leaveService: LeaveService
  ) { }

  ngOnInit(): void {
    this.getLeaves();
  }

  getLeaves(): void {
    this.leaveService.getLeaves().subscribe(leaves => {
      this.leaves = leaves
      this.approvedLeaves = this.leaves.filter(leave => leave.status == 'Approved');
      this.pendingLeaves = this.leaves.filter(leave => leave.status == 'Created');
    });
  }
  navigateToAdd(): void {
    this.router.navigate(['/leaves/add']);
  }
  navigateToEdit(leave: Leave): void {
    this.router.navigate(['/leaves/edit', leave.id]);
  }

}
