package com.chirru.entity;

import jakarta.persistence.*;

@Entity
public class Project {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String title;
 @Column(length=2000)
 private String description;
 private String githubUrl;
 private String liveUrl;

 public Long getId(){return id;}
 public void setId(Long id){this.id=id;}
 public String getTitle(){return title;}
 public void setTitle(String title){this.title=title;}
 public String getDescription(){return description;}
 public void setDescription(String description){this.description=description;}
 public String getGithubUrl(){return githubUrl;}
 public void setGithubUrl(String githubUrl){this.githubUrl=githubUrl;}
 public String getLiveUrl(){return liveUrl;}
 public void setLiveUrl(String liveUrl){this.liveUrl=liveUrl;}
}
