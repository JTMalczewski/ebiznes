**Zadanie 1** Docker

Należy stworzyć obraz Dockerowy na bazie debianowej dystrybuji (bez zainstalowanych paczek javy, kotlina, itp.) oraz zainstalować kotlina, go lub scalę. Należy również dodać narzędzia do budowania np. sbt, gradle, odpowiednio do języka. Na tym obrazie powinien być również klint do statycznej analizy kodu w Kotlinie.

:white_check_mark: 3.0 obraz ubuntu z Pythonem w wersji 3.8

:white_check_mark: 3.5 obraz ubuntu:22.04 z Javą w wersji 8 oraz Kotlinem

:white_check_mark: 4.0 do powyższego należy dodać najnowszego Gradle’a oraz paczkę JDBC SQLite w ramach projektu na Gradle (build.gradle)

:x: 4.5 wymaganie 4 [Link do commita 4](https://github.com/JTMalczewski/ebiznes/tree/main/zadanie_1)

:x: 5.0 wymaganie 5 [Link do commita 5](https://github.com/kprzystalski/workshop_template/commit/hash)


Kod: [Zadanie 1](https://github.com/JTMalczewski/ebiznes/tree/main/zadanie_1)

**Zadanie 2** Scala

Należy stworzyć aplikację na frameworku Play w Scali 2.

:x: 3.0 Należy stworzyć kontroler do Produktów

:x: 3.5 Do kontrolera należy stworzyć endpointy zgodnie z CRUD - dane pobierane z listy

:x: 4.0 Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy zgodnie z CRUD

:x: 4.5 Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać skrypt uruchamiający aplikację via ngrok

:x: 5.0 Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUD

