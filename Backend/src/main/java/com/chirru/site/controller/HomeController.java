package com.chirru.site.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public ResponseEntity<String> home() {
        String html = """
                <html>
                  <head><title>Chirru API</title></head>
                  <body style=\"font-family:Arial,sans-serif;background:#0b0f19;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;\">
                    <div style=\"text-align:center;\">
                      <h1>Chirru API is running ✅</h1>
                      <p>Available endpoints: <code>/api/profile</code>, <code>/api/contact</code></p>
                    </div>
                  </body>
                </html>
                """;
        return ResponseEntity.ok(html);
    }
}
