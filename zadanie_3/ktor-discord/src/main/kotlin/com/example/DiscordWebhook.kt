package com.example;

import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse


object DiscordWebhook {
    @Throws(Exception::class)
    @JvmStatic
    fun main(args: Array<String>) {
        val client = HttpClient.newHttpClient()
        val request = HttpRequest.newBuilder()
            .uri(URI("https://discord.com/api/webhooks/1219223485558296608/lCRjbQCkaqoY4Ivr3GDx0JxTd9FJay_R_cUZMa8Tecja5fNb44tAMQf2p_-1bbeAf5At")) // replace with your webhook URL
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"content\": \"Hello, Discord!\"}"))
            .build()

        val response = client.send(request, HttpResponse.BodyHandlers.ofString())

        println(response.body())
    }
}