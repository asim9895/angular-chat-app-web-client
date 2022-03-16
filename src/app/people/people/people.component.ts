import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  users: any = [];
  searchForm: FormGroup;
  searched: boolean = false;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.all_users({}).subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  clearFilter() {
    this.searched = false;
    this.searchForm.reset();
    return this.getAllUsers();
  }

  searchUsers() {
    this.userService
      .search_users({ username: this.searchForm.value.search })
      .subscribe(
        (data) => {
          console.log(data);
          this.users = data;
          this.searched = true;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
