import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from '../../../core/services/member-service';
import { Photo } from '../../../types/member';
import { AsyncPipe } from '@angular/common';
import { ImageUpload } from "../../../shared/image-upload/image-upload";

@Component({
  selector: 'app-member-photos',
  imports: [AsyncPipe, ImageUpload],
  templateUrl: './member-photos.html',
  styleUrl: './member-photos.css',
})
export class MemberPhotos {
  protected memberService = inject(MemberService);
  private route = inject(ActivatedRoute);
  protected photos$?: Observable<Photo[]>;

  constructor() {
    const memberId = this.route.parent?.snapshot.paramMap.get('id');
    if (memberId) {
      this.photos$ = this.memberService.getMemberPhotos(memberId);
    }
  }

  get photoMocks() {
    return Array.from({ length: 20 }, (_, i) => ({
      url: '/user.png'
      // url: `https://picsum.photos/200/300?random=${i + 1}`,
    }));
  }
}
