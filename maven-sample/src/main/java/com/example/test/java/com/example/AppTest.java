package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class AppTest {
    @Test
    void greet_shouldReturnMessage() {
        assertEquals("Hello, World!", App.greet("World"));
    }
}
