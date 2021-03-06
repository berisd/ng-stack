import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiResponse, PostComment, PostInfo } from 'src/app/services/api/api-mock/types';

@Component({
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss'],
})
export class PostCommentsComponent implements OnInit {
  postComments: PostComment[];
  postInfo: PostInfo;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const resolversData = this.activatedRoute.snapshot.data.postCommentsRes as ApiResponse<PostComment>;
    this.postInfo = resolversData.meta.postInfo;
    this.postComments = resolversData.data;
  }
}
