import { Injectable } from '@angular/core';

@Injectable()
export class MemberProfileService {

  readonly jhjeon ={
          name: "Jae Ho Jeon",
          title: "Developer",
          affiliation: "Kakao Corp.",
          email: "jay.jh (at) kakaocorp.com",
          web: "#",
          thumb:"jhjeon_portrait.jpg"
        }

  readonly yhkim = {
        name: "Young-Ho Kim",
        title: "Ph.D Candidate",
        affiliation: "Seoul Nat'l University",
        email: "yhkim (at) hcil.snu.ac.kr",
        web: "http://younghokim.net",
        thumb:"yhkim_portrait.jpg"
  } 
  
  readonly blee = {
    name: "Bongshin Lee",
    title: "Senior Researcher",
    affiliation: "Microsoft Research",
    email: "bongshin (at) microsoft.com",
    web: "http://bongshiny.com",
    thumb:"author_bongshin.png"
  }

  readonly echoe = {
    name: "Eun Kyoung Choe",
    title: "Assistant Professor",
    affiliation: "University of Maryland",
    email: "choe (at) umd.edu",
    web:"http://eunkyoungchoe.com",
    thumb:"choe_portrait.png"
  }

  readonly jseo = {
    name: "Jinwook Seo",
    title: "Associate Professor",
    affiliation: "Seoul Nat'l University",
    email: "jseo (at) snu.ac.kr",
    web:"http://hcil.snu.ac.kr/people/jinwook-seo",
    thumb:"jseo_portrait.jpg"
  }

  readonly jhkim = {
    name: "Junhoe Kim",
    title: "Undergraduate Student",
    email: "jooon.hoe94 (at) gmail.com",
    affiliation: "Seoul Nat'l University",
    thumb: "jhkim_portrait.jpg"
  }

  constructor() {

  }

  public ubicomp2017Authors(): Array<any>{
    return [this.yhkim, this.jhjeon, this.blee, this.echoe, this.jseo]
  }

  public pastMembers(): Array<any>{
    return [this.jhjeon]
  }

  public members(): Array<any>{
    return [this.yhkim, this.blee, this.echoe, this.jseo]
  }

  public contributors(): Array<any>{
    return [this.jhkim]
  }

}
