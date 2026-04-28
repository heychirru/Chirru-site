package com.chirru.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PublicController {

 @GetMapping("/profile")
 public Map<String,String> profile(){
   Map<String,String> data=new HashMap<>();
   data.put("name","Chiranjit Das");
   data.put("title","Java Developer");
   data.put("bio","Welcome to Chirru-site v2");
   return data;
 }

 @GetMapping("/projects")
 public List<Map<String,String>> projects(){
   Map<String,String> p=new HashMap<>();
   p.put("title","Chirru-site v2");
   p.put("description","Spring Boot + React Portfolio");
   return Arrays.asList(p);
 }

 @PostMapping("/contact")
 public Map<String,String> contact(@RequestBody Map<String,String> body){
   return Map.of("message","Message received", "name", body.getOrDefault("name","Guest"));
 }
}
