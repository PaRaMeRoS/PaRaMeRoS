# Projektübersicht: Bearbeitung der Seiten unter [`src/templates`](https://github.com/PaRaMeRoS/PaRaMeRoS/src/templates)

Willkommen! Dieses Dokument gibt einen Überblick über die Ordnerstruktur im Verzeichnis  unseres Projekts. Das Projekt basiert auf dem **MERN-Stack** (MongoDB, Express.js, React, Node.js) und ist modular aufgebaut.

---

> [!CAUTION]
> Bitte beachten Sie:
> Die Ordner **Hobbies**, **Events** und **Team** sollten **nicht bearbeitet** werden, da Änderungen an diesen Dateien zu Problemen mit dem Blog-Post-System oder dem Team-Management führen könnten. 


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
- **`about.js`**: Informationsseite über das Team.
- **`home.js`**: Startseite der Anwendung, die den ersten Eindruck vermittelt.
- **`impressum.js`**: Rechtlich erforderliche Impressumsseite.
- **`privacyPolicies.js`**: Seite mit den Datenschutzrichtlinien. Diese ist besonders wichtig für die Einhaltung gesetzlicher Vorgaben.

---

# Bei Fragen zu dieser Struktur oder den Templates stehe ich gerne zur Verfügung!
