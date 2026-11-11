# amup.cz

Web elektro firmy AmUp, s.r.o.. Je to obyčejný statický web: HTML stránky, jeden soubor se styly
(`style.css`) a pár řádků JavaScriptu (`main.js`).
Je připravený pro GitHub Pages na adrese https://amup.cz.

## Stránky

| Stránka | Soubor |
| --- | --- |
| Úvod | index.html |
| Služby | elektroinstalace.html, rozvadece.html, pripojky.html, rekonstrukce.html, novostavby.html, bytove-domy-garaze.html, slaboproud.html, kamerove-systemy.html, zabezpecovaci-systemy.html, opravy-havarie.html |
| Realizace | realizace.html |
| Kontakt a formulář | kontakt.html |
| Ochrana osobních údajů | ochrana-osobnich-udaju.html |
| Poděkování po odeslání formuláře | dekujeme.html |
| Chybová stránka | 404.html |

## Jak upravit text

Na GitHubu otevřete soubor → ikona tužky (Edit) → upravte text → **Commit changes**.
Za minutu až dvě se změna objeví na webu.

Telefon, e-mail a adresa jsou na každé stránce (hlavička, patička, kontakt). Při jejich změně
použijte hledání a nahrazení ve všech souborech.

Každá stránka má nahoře `<title>` a `<meta name="description">`. To je text, který se ukazuje
ve výsledcích Googlu a Seznamu. Při úpravě služby je dobré upravit i tyhle dva řádky.

## Jak přidat fotku do úvodu

1. Na počítači vytvořte složku `fotky`, dejte do ní fotku `uvod.jpg` a celou složku přetáhněte na GitHubu do Add file → Upload files.
2. V `index.html` najděte komentář `FOTKA` a blok `<div class="placeholder">…</div>` pod ním
   nahraďte řádkem `<img src="fotky/uvod.jpg" alt="Popis fotky">`.

## Jak přidat realizaci

1. Fotky dejte na počítači do složky `fotky` a celou složku přetáhněte na GitHubu do Add file → Upload files. Ideálně JPG o šířce kolem 1600 px, každá do 500 kB.
2. V `realizace.html` je v komentáři připravený vzor `<figure class="work">`. Zkopírujte ho,
   upravte název fotky a popis. Až přidáte první realizaci, smažte blok `placeholder`.

## Formulář

Formulář posílá poptávky přes službu FormSubmit (formsubmit.co) na **navratil@amup.cz**.
Po prvním odeslání přijde na tento e-mail potvrzovací zpráva od FormSubmit – je potřeba
kliknout na odkaz „Activate“. Teprve pak začnou poptávky chodit.

## Doména

Soubor `CNAME` obsahuje `amup.cz`. V administraci Webglobe (DNS) je potřeba nastavit:

- 4× záznam **A** pro `amup.cz`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- záznam **CNAME** pro `www` → `<uzivatel>.github.io`

Záznamy MX a TXT pro Google Workspace (e-mail) **neměnit**.
