**Zadanie 1** Docker

Należy stworzyć obraz Dockerowy na bazie debianowej dystrybuji (bez zainstalowanych paczek javy, kotlina, itp.) oraz zainstalować kotlina, go lub scalę. Należy również dodać narzędzia do budowania np. sbt, gradle, odpowiednio do języka. Na tym obrazie powinien być również klint do statycznej analizy kodu w Kotlinie.

:white_check_mark: 3.0 obraz ubuntu z Pythonem w wersji 3.8 [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/16bbe4b871a425ee741759c3b7f309d92a73f5c3)

:white_check_mark: 3.5 obraz ubuntu:22.04 z Javą w wersji 8 oraz Kotlinem [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/16bbe4b871a425ee741759c3b7f309d92a73f5c3)

:white_check_mark: 4.0 do powyższego należy dodać najnowszego Gradle’a oraz paczkę JDBC SQLite w ramach projektu na Gradle (build.gradle) [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/16bbe4b871a425ee741759c3b7f309d92a73f5c3)

:x: 4.5 stworzyć przykład typu HelloWorld oraz uruchomienie aplikacji przez CMD oraz gradle

:x: 5.0 dodać konfigurację docker-compose

Kod: [Zadanie 1](https://github.com/JTMalczewski/ebiznes/tree/main/zadanie_1) \
DockerHub: [ubuntu2204_py38_jdk8_kot_grasql](https://hub.docker.com/repository/docker/jtmalczewski/ubuntu2204_py38_jdk8_kot_grasql/general)

**Zadanie 2** Scala

Należy stworzyć aplikację na frameworku Play w Scali 2.

:white_check_mark: 3.0 Należy stworzyć kontroler do Produktów [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/086e0534048c7c84140787d0400a0a64bb57e86a)

:white_check_mark: 3.5 Do kontrolera należy stworzyć endpointy zgodnie z CRUD - dane pobierane z listy [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/086e0534048c7c84140787d0400a0a64bb57e86a)

:white_check_mark: 4.0 Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy zgodnie z CRUD [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/086e0534048c7c84140787d0400a0a64bb57e86a)

:x: 4.5 Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać skrypt uruchamiający aplikację via ngrok

:x: 5.0 Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUD

Kod: [Zadanie 2](https://github.com/JTMalczewski/ebiznes/tree/main/zadanie_2) 

**Zadanie 3** Kotlin

:white_check_mark: 3.0 Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor, która pozwala na przesyłanie wiadomości na platformę Discord [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/6bae6e085ef9061eb5c976ab83fd030fb9d3a599)

:x: 3.5 Aplikacja jest w stanie odbierać wiadomości użytkowników z platformy Discord skierowane do aplikacji (bota)

:x: 4.0 Zwróci listę kategorii na określone żądanie użytkownika

:x: 4.5 Zwróci listę produktów wg żądanej kategorii

:x: 5.0 Aplikacja obsłuży dodatkowo jedną z platform: Slack, Messenfer, Webex, Skype, Discrod

Kod: [Zadanie 3](https://github.com/JTMalczewski/ebiznes/tree/main/zadanie_3/ktor-discord/src/main/kotlin/com/example/DiscordWebhook.kt)