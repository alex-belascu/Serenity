package com.hackaton.serenity.utils;
import com.hackaton.serenity.exception.TokenExpiredException;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import java.io.IOException;

public class CustomAuthEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authenticationException) throws IOException {

        if (authenticationException.getCause() instanceof ExpiredJwtException
                || authenticationException.getCause() instanceof TokenExpiredException) {
            // Specific handling for expired JWT
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized: Token is expired");
        }
    }
}