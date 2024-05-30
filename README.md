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

**Zadanie 4 Go**

:white_check_mark: 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Produktów zgodny z CRUD

:white_check_mark: 3.5 Należy stworzyć model Produktów wykorzystując gorm oraz wykorzystać model do obsługi produktów (CRUD) w kontrolerze (zamiast listy)

:x: 4.0 Należy dodać model Koszyka oraz dodać odpowiedni endpoint

:x: 4.5 Należy stworzyć model kategorii i dodać relację między kategorią, a produktem

:x: 5.0 pogrupować zapytania w gorm’owe scope'y

**Zadanie 5 Frontend**

Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js. W ramach projektu należy stworzyć trzy komponenty: Produkty, Koszyk oraz Płatności. Koszyk oraz Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej. Aplikacja serwera w jednym z trzech języków: Kotlin, Scala, Go. Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.

:white_check_mark: 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/721bada73a965fc676850321088647d7008f8d7f)

:white_check_mark: 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/721bada73a965fc676850321088647d7008f8d7f)

:white_check_mark: 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/721bada73a965fc676850321088647d7008f8d7f)

:x: 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose

:x: 5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS

Kod: [Zadanie 5](https://github.com/JTMalczewski/ebiznes/tree/main/zadanie_5)

**Zadanie 6 Testy**

Należy stworzyć 20 przypadków testowych w jednym z rozwiązań:

- Cypress JS (JS)
- Selenium (Kotlin, Python, Java, JS, Go, Scala)

Testy mają w sumie zawierać minimum 50 asercji (3.5). Mają również uruchamiać się na platformie Browserstack (5.0). Proszę pamiętać o stworzeniu darmowego konta via https://education.github.com/pack.

:x: 3.0 Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala)

:x: 3.5 Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji

:x: 4.0 Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami

:x: 4.5 Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint

:x: 5.0 Należy uruchomić testy funkcjonalne na Browserstacku
