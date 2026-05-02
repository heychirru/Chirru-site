package com.chirru.site.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProfileService {
    private Map<String, Object> profile = defaultProfile();

    public synchronized Map<String, Object> getProfile() {
        return profile;
    }

    public synchronized Map<String, Object> updateProfile(Map<String, Object> updated) {
        profile = updated;
        return profile;
    }

    private Map<String, Object> defaultProfile() {
        Map<String, Object> hero = new HashMap<>();
        hero.put("name", "Chiranjit Das");
        hero.put("title", "Wanna be a Java Backend Developer");
        hero.put("social", Map.of(
                "github", "https://github.com/heychirru",
                "instagram", "https://www.instagram.com/chir.ru_26t/",
                "facebook", "https://www.facebook.com/chirru26/",
                "linkedin", "https://www.linkedin.com/in/heychirru26",
                "twitter", "https://x.com/chir_ru26"
        ));

        List<Map<String, String>> education = new ArrayList<>();
        education.add(Map.of("degree", "BTech in Computer Science & Engineering", "institution", "Siliguri Institute of Technology (MAKAUT)", "year", "2023 - Present", "icon", "🎓"));

        Map<String, Object> result = new HashMap<>();
        result.put("hero", hero);
        result.put("aboutIntro", "Curious about me? Here you have it:");
        result.put("aboutParagraphs", List.of(
                "Hi! I'm Chiranjit Das, a passionate Backend Developer.",
                "I build elegant web solutions tailored to user needs."
        ));
        result.put("skills", List.of("Java", "Javascript", "React", "Node.js", "MongoDB", "Git"));
        result.put("education", education);
        result.put("projects", List.of(
                Map.of("id", 1, "title", "Social Media Dashboard", "description", "A comprehensive social media management dashboard.", "technologies", List.of("JAVA", "Spring Boot"), "github", "https://github.com/heychirru/Social-Media-Dashboard.git"),
                Map.of("id", 2, "title", "Student Grade Tracker", "description", "A simple student grade tracker.", "technologies", List.of("JAVA", "Swing"), "github", "https://github.com/chirru26/Student-Grade-Tracker.git")
        ));
        return result;
    }
}
