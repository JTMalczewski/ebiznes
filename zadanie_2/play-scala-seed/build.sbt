name := """play-scala-seed"""
organization := "uj.edu.pl"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.13"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "6.0.0" % Test

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "uj.edu.pl.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "uj.edu.pl.binders._"
