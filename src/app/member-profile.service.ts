import { Injectable } from '@angular/core';

@Injectable()
export class MemberProfileService {

  readonly jhjeon = {
    name: "Jae Ho Jeon",
    title: "Software Engineer",
    affiliation: "Google",
    email: "jaehojeon (at) google.com",
    web: "#",
    thumb: "jhjeon_portrait.jpg",
    sup: "1"
  }

  readonly yhkim = {
    name: "Young-Ho Kim",
    title: "Postdoc",
    affiliation: "University of Maryland",
    email: "yghokim (at) umd.edu",
    web: "http://younghokim.net",
    thumb: "yhkim_portrait.jpg",
    original: "Seoul National University",
    sup: "1"
  }

  readonly blee = {
    name: "Bongshin Lee",
    title: "Sr. Principal Researcher",
    affiliation: "Microsoft Research",
    email: "bongshin (at) microsoft.com",
    web: "http://bongshiny.com",
    thumb: "author_bongshin.png"
  }

  readonly echoe = {
    name: "Eun Kyoung Choe",
    title: "Associate Professor",
    affiliation: "University of Maryland",
    email: "choe (at) umd.edu",
    web: "http://eunkyoungchoe.com",
    thumb: "choe_portrait.png"
  }

  readonly jseo = {
    name: "Jinwook Seo",
    title: "Professor",
    affiliation: "Seoul Nat'l University",
    email: "jseo (at) snu.ac.kr",
    web: "http://hcil.snu.ac.kr/people/jinwook-seo",
    thumb: "jseo_portrait.jpg"
  }

  readonly jhkim = {
    name: "Junhoe Kim",
    title: "Software Engineer",
    email: "",
    affiliation: "NCSOFT",
    thumb: "jhkim_portrait.jpg",
    sup: "1"
  }

  readonly valerie = {
    name: "Valérie Erb",
    title: "Master Student",
    email: "",
    affiliation: "KAIST",
    thumb: "valerie_portrait.jpg",
    original: "Universität Zürich",
    sup: "1"
  }

  constructor() {

  }

  public ubicomp2017Authors(): Array<any> {
    return [this.yhkim, this.jhjeon, this.blee, this.echoe, this.jseo]
  }

  public pastMembers(): Array<any> {
    return [this.jhjeon]
  }

  public members(): Array<any> {
    return [this.yhkim, this.blee, this.echoe, this.jseo]
  }

  public contributors(): Array<any> {
    return [this.jhkim, this.valerie]
  }

}
