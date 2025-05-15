# Projektübersicht: Bearbeitung der Seiten unter [`src/templates`](https://github.com/PaRaMeRoS/PaRaMeRoS/tree/main/src/templates)

Willkommen! Dieses Dokument gibt einen Überblick über die Ordnerstruktur im Verzeichnis unseres Projekts. Das Projekt basiert auf dem **MERN-Stack** (MongoDB, Express.js, React, Node.js) und ist modular aufgebaut.

---

> [!CAUTION]
> Bitte beachten Sie:
> Die Ordner **Hobbies**, **Events** und **Team** sollten **nicht bearbeitet** werden, da Änderungen an diesen Dateien zu Problemen mit dem Blog-Post-System oder dem Team-Management führen könnten.  

---

## Ordnerstruktur

> [!WARNING]
> ### `events`
> Enthält Templates für Seiten, die mit **Events** (Veranstaltungen) zusammenhängen, wie Event-Listen oder Kalenderansichten. **Wichtig:** Bitte nicht bearbeiten, um die Funktionalität des Blog-Post-Systems nicht zu beeinträchtigen.
>
> ### `hobbies`
> In diesem Ordner befinden sich Templates für Seiten zu **Hobbies**. Änderungen in diesem Ordner sollten vermieden werden, da sie das **alte** Hobby-System beeinträchtigen könnten.
>
> ### `team`
> Hier befinden sich Templates für Seiten, die das **Team** betreffen. Änderungen sollten **vermieden** werden, um das Team-Management-System nicht zu stören.

### `private`
Dieser Ordner ist relativ **uninteressant**, da er nur Templates für das **Login** und ein **altes Terminal** enthält.  

---

### `footers`
Dieser Ordner enthält Templates für die **unteren Seitenteile** (Footer) jeder Seite. Hier finden sich rechtliche Hinweise, Links oder Kontaktinformationen.

### `navbars`
Hier liegen Templates für **Navigationsleisten**. Diese definieren die Navigation innerhalb der Anwendung und sind für jede Seite spezifisch.

---

### `public`
Der **wichtigste** Ordner des Projekts! Hier finden sich die Templates für **öffentlich zugängliche Seiten**, die für alle Benutzer sichtbar sind. Die Dateien im Detail:

- **`404.js`**: Fehlerseite, die angezeigt wird, wenn eine Seite nicht gefunden wird. Änderungen hier sind **uninteressant**.
- **`about.js`**: **Seite über das Team**. Eine detaillierte Erklärung zur Bearbeitung dieser Datei finden Sie weiter unten.
- **`home.js`**: Startseite der Anwendung, die den ersten Eindruck vermittelt.
- **`impressum.js`**: Rechtlich erforderliche Impressumsseite.
- **`privacyPolicies.js`**: Seite mit den Datenschutzrichtlinien. Diese ist besonders wichtig für die Einhaltung gesetzlicher Vorgaben.

---

## Bearbeitung von `about.js` & `home.js`

### 1. **Importe**
- **Navbar** und **Footer**: Diese werden aus den jeweiligen Ordnern `navbars` und `footers` eingebunden.
- **Bilder und Videos**: Bilder (`about.webp`, `coaches.webp`, etc.) und ein Video (`roboter.mkv`) werden aus dem `media`-Verzeichnis importiert.
- **CSS-Datei**: Das Styling erfolgt über die Datei `home.css`.

### 2. **Komponentenaufbau**
- Der Haupt-Container hat die Klasse `about`.
- Die Seite ist in verschiedene Abschnitte (`div` mit der Klasse `info`) unterteilt, die jeweils aus einem **Titel (`<h3>`)**, **Text (`<p>`)** und optional einem **Bild (`<img>`)** oder Video bestehen.

### 3. **Anpassungen**
- **Textinhalte bearbeiten**: Ändern Sie die `<p>`-Inhalte, um den Text zu aktualisieren. Achten Sie darauf, HTML-Tags korrekt zu verwenden.
- **Bilder aktualisieren**: Um ein Bild auszutauschen, ersetzen Sie den Importpfad (`BildX`) und die `src`-Eigenschaft des entsprechenden `<img>`-Tags.
- **Neuen Abschnitt hinzufügen**: Kopieren Sie ein bestehendes `info`-Element, ändern Sie die Inhalte, und importieren Sie ggf. zusätzliche Bilder oder Videos.

### 4. **Wichtig**
- **Bild- und Videopfad**: Stellen Sie sicher, dass die Dateien im [`media`](https://github.com/PaRaMeRoS/PaRaMeRoS/tree/main/src/media)-Verzeichnis vorhanden sind.
- **Styling**: Änderungen an der Darstellung können in der `home.css` vorgenommen werden.

---

# Bei Fragen zu dieser Struktur oder den Templates stehe ich gerne zur Verfügung!
