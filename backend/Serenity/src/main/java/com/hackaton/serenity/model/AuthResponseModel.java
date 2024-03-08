package com.hackaton.serenity.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponseModel {
    private String token;
    private String email;
    private String name;
    private String lastName;
    private String role;
    private String address;
}
