package com.chirru.site.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
    @PostMapping
    public ResponseEntity<Map<String, String>> sendContact(@RequestBody Map<String, String> payload) {
        return ResponseEntity.ok(Map.of("message", "Contact received in Java backend", "name", payload.getOrDefault("name", "")));
    }
}
