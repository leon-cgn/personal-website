<script>
	import { goto } from '$app/navigation';
	import { locale, t } from '$lib/functions/i18n/index';
</script>

<svelte:head>
	<title>{$t('common.imprintPrivacy.pageTitle')}</title>
</svelte:head>

<main class="flex flex-col gap-4 px-4">
	<div class="flex w-full">
		<button class="btn" on:click={() => goto('/')}>
			<i class="bx bx-arrow-back" />
			{$t('common.imprintPrivacy.buttonBack')}
		</button>
	</div>
	<div>
		{#if $locale === 'de'}
			<h1 class="text-2xl">Impressum</h1>
			<h2 class="mt-2 font-bold">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
			<p>
				Leon Schirmer<br />
				Bachemerstra&szlig;e, 68<br />
				50931 K&ouml;ln
			</p>

			<h2 class="mt-2 font-bold">Kontakt</h2>
			<p>E-Mail: hallo@leonschirmer.dev</p>

			<h2 class="mt-2 font-bold">Umsatzsteuer-ID</h2>
			<p>
				Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
				DE359039098
			</p>

			<h2 class="mt-2 font-bold">EU-Streitschlichtung</h2>
			<p>
				Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
				bereit: <a
					href="https://ec.europa.eu/consumers/odr/"
					target="_blank"
					rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a
				>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
			</p>

			<h2 class="mt-2 font-bold">
				Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
			</h2>
			<p>
				Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
				Verbraucherschlichtungsstelle teilzunehmen.
			</p>

			<p>
				Quelle: <a href="https://www.e-recht24.de/impressum-generator.html"
					>https://www.e-recht24.de/impressum-generator.html</a
				>
			</p>

			<h1 class="mt-4 text-2xl">Datenschutz&shy;erkl&auml;rung</h1>
			<h2 class="mt-2 font-bold">1. Datenschutz auf einen Blick</h2>
			<h3 class="mt-2">Allgemeine Hinweise</h3>
			<p>
				Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren
				personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
				sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
				Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
				Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
			</p>
			<h3 class="mt-2">Datenerfassung auf dieser Website</h3>
			<p>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</p>
			<p>
				Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
				Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo;
				in dieser Datenschutzerkl&auml;rung entnehmen.
			</p>
			<p>Wie erfassen wir Ihre Daten?</p>
			<p>
				Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
				sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
			</p>
			<p>
				Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
				unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
				Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
				automatisch, sobald Sie diese Website betreten.
			</p>
			<p>Wof&uuml;r nutzen wir Ihre Daten?</p>
			<p>
				Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
				gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet
				werden.
			</p>
			<p>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</p>
			<p>
				Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und
				Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
				Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine
				Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung
				jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
				bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
				Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
				Aufsichtsbeh&ouml;rde zu.
			</p>
			<p>
				Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns
				wenden.
			</p>
			<h2 class="mt-2 font-bold">2. Hosting</h2>
			<p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
			<h3 class="mt-2">Externes Hosting</h3>
			<p>
				Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
				erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es
				sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
				Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die &uuml;ber eine
				Website generiert werden, handeln.
			</p>
			<p>
				Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber unseren
				potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
				sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
				professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
				Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
				von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die
				Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
				(z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist
				jederzeit widerrufbar.
			</p>
			<p>
				Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur
				Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf
				diese Daten befolgen.
			</p>
			<p>Wir setzen folgende(n) Hoster ein:</p>
			<p>
				Vercel Inc.<br />
				340 S Lemon Ave #4133<br />
				Walnut, CA 91789<br />
				USA
			</p>
			<p>Auftragsverarbeitung</p>
			<p>
				Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten
				Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen
				Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer
				Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
			</p>
			<h2 class="mt-2 font-bold">3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
			<h3 class="mt-2">Datenschutz</h3>
			<p>
				Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir
				behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
				Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
			</p>
			<p>
				Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
				Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden
				k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir
				erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
				geschieht.
			</p>
			<p>
				Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der
				Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
				der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
			</p>
			<h3 class="mt-2">Hinweis zur verantwortlichen Stelle</h3>
			<p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>
			<p>
				Leon Schirmer<br />
				Bachemerstra&szlig;e 68<br />
				50931 K&ouml;ln
			</p>

			<p>E-Mail: hallo@leonschirmer.dev</p>
			<p>
				Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder
				gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen
				Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
			</p>

			<h3 class="mt-2">Speicherdauer</h3>
			<p>
				Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt
				wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
				Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen
				oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
				sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung
				Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
				Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser
				Gr&uuml;nde.
			</p>
			<h3 class="mt-2">
				Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
			</h3>
			<p>
				Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
				personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit.
				a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
				Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten
				in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs.
				1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf
				Informationen in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt
				haben, erfolgt die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
				TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
				Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen
				erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
				Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer rechtlichen
				Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
				Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
				1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen
				Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung
				informiert.
			</p>
			<h3 class="mt-2">Empfänger von personenbezogenen Daten</h3>
			<p>
				Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen
				Stellen zusammen. Dabei ist teilweise auch eine &Uuml;bermittlung von personenbezogenen
				Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
				externe Stellen weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich ist,
				wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
				Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an
				der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt.
				Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur
				auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle
				einer gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung
				geschlossen.
			</p>
			<h3 class="mt-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
			<p>
				Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung
				m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die
				Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
				Widerruf unber&uuml;hrt.
			</p>
			<h3 class="mt-2">
				Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen
				Direktwerbung (Art. 21 DSGVO)
			</h3>
			<p>
				WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT,
				HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION
				ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES
				GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE
				RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
				DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
				PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
				SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN,
				RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
				AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1
				DSGVO).
			</p>
			<p>
				WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE
				DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
				DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
				SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE
				PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
				(WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
			</p>
			<h3 class="mt-2">Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h3>
			<p>
				Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht
				bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
				Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu.
				Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
				gerichtlicher Rechtsbehelfe.
			</p>
			<h3 class="mt-2">Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>
			<p>
				Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung
				eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
				g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
				&Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
				soweit es technisch machbar ist.
			</p>
			<h3 class="mt-2">Auskunft, Berichtigung und L&ouml;schung</h3>
			<p>
				Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
				unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft
				und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
				oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
				Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
			</p>
			<h3 class="mt-2">Recht auf Einschr&auml;nkung der Verarbeitung</h3>
			<p>
				Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten
				zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf
				Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
			</p>
			<ul>
				<li>
					Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
					ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
					der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
					personenbezogenen Daten zu verlangen.
				</li>
				<li>
					Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig
					geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der
					Datenverarbeitung verlangen.
				</li>
				<li>
					Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur
					Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen,
					haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
					personenbezogenen Daten zu verlangen.
				</li>
				<li>
					Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
					Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht
					feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung
					der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
				</li>
			</ul>
			<p>
				Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben,
				d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer
				Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
				Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder
				juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der
				Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.
			</p>
			<h3 class="mt-2">SSL- bzw. TLS-Verschl&uuml;sselung</h3>
			<p>
				Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung
				vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
				Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte
				Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo;
				auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
			</p>
			<p>
				Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an
				uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
			</p>
			<h2 class="mt-2 font-bold">4. Datenerfassung auf dieser Website</h2>
			<h3 class="mt-2">Server-Log-Dateien</h3>
			<p>
				Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
				Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:
			</p>
			<ul>
				<li>Browsertyp und Browserversion</li>
				<li>verwendetes Betriebssystem</li>
				<li>Referrer URL</li>
				<li>Hostname des zugreifenden Rechners</li>
				<li>Uhrzeit der Serveranfrage</li>
				<li>IP-Adresse</li>
			</ul>
			<p>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
			<p>
				Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
				Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
				und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst
				werden.
			</p>
			<p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
		{:else}
			<h1 class="text-2xl">Imprint</h1>
			<h2 class="mt-2 font-bold">Information in accordance with § 5 TMG</h2>
			<p>
				Leon Schirmer<br />
				Bachemerstraße, 68<br />
				50931 Cologne
			</p>

			<h2 class="mt-2 font-bold">Contact</h2>
			<p>Email: hallo@leonschirmer.dev</p>

			<h2 class="mt-2 font-bold">VAT ID</h2>
			<p>
				VAT identification number in accordance with § 27 a VAT Act:<br />
				DE359039098
			</p>

			<h2 class="mt-2 font-bold">EU Dispute Resolution</h2>
			<p>
				The European Commission provides a platform for online dispute resolution (ODR):
				<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
					https://ec.europa.eu/consumers/odr/
				</a>.<br />
				You can find our email address in the imprint above.
			</p>

			<h2 class="mt-2 font-bold">Consumer Dispute Resolution/Universal Mediation Body</h2>
			<p>
				We are neither willing nor obligated to participate in dispute resolution procedures before
				a consumer arbitration board.
			</p>

			<p>
				Source: <a href="https://www.e-recht24.de/impressum-generator.html"
					>https://www.e-recht24.de/impressum-generator.html</a
				>
			</p>
			<h1 class="mt-4 text-2xl">Privacy Policy</h1>
			<h2 class="mt-2 font-bold">1. Privacy at a Glance</h2>
			<h3 class="mt-2">General Information</h3>
			<p>
				The following notes provide a simple overview of what happens to your personal data when you
				visit this website. Personal data are all data with which you can be personally identified.
				Detailed information on the subject of data protection can be found in our privacy policy
				listed below this text.
			</p>
			<h3 class="mt-2">Data Collection on this Website</h3>
			<p>Who is responsible for data collection on this website?</p>
			<p>
				The data processing on this website is carried out by the website operator. You can find
				their contact details in the "Note on the Responsible Party" section of this privacy policy.
			</p>
			<p>How do we collect your data?</p>
			<p>
				Your data is collected when you provide it to us. This can be data that you enter into a
				contact form, for example.
			</p>
			<p>
				Other data is automatically collected by our IT systems when you visit the website. This is
				mainly technical data (e.g., web browser, operating system, or time of page view). This data
				is collected automatically as soon as you enter this website.
			</p>
			<p>What do we use your data for?</p>
			<p>
				Part of the data is collected to ensure the proper functioning of the website. Other data
				can be used to analyze how visitors use the site.
			</p>
			<p>What rights do you have regarding your data?</p>
			<p>
				You have the right at any time to receive free information about the origin, recipient, and
				purpose of your stored personal data. You also have the right to request the correction or
				deletion of this data. If you have given your consent to data processing, you can revoke
				this consent at any time for the future. Furthermore, under certain circumstances, you have
				the right to request the restriction of the processing of your personal data. You also have
				the right to lodge a complaint with the competent supervisory authority.
			</p>
			<p>
				For this and other questions on the topic of data protection, you can always contact us.
			</p>
			<h2 class="mt-2 font-bold">2. Hosting</h2>
			<p>We host the contents of our website with the following provider:</p>
			<h3 class="mt-2">External Hosting</h3>
			<p>
				This website is hosted externally. The personal data collected on this website is stored on
				the servers of the host/hosting providers. This can include, among other things, IP
				addresses, contact requests, meta and communication data, contract data, contact details,
				names, website access, and other data generated via a website.
			</p>
			<p>
				The external hosting is done for the purpose of fulfilling the contract towards our
				potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a
				secure, fast, and efficient provision of our online services by a professional provider
				(Art. 6 para. 1 lit. f GDPR). If consent has been requested, processing is carried out
				exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as
				the consent covers the storage of cookies or access to information on the user's end device
				(e.g., device fingerprinting) in the sense of the TTDSG. The consent can be revoked at any
				time.
			</p>
			<p>
				Our host/hosting providers will process your data only to the extent necessary to fulfill
				their performance obligations and will follow our instructions regarding this data.
			</p>
			<p>We use the following host:</p>
			<p>
				Vercel Inc.<br />
				340 S Lemon Ave #4133<br />
				Walnut, CA 91789<br />
				USA
			</p>
			<p>Order Processing</p>
			<p>
				We have concluded a contract for order processing (AVV) for the use of the above-mentioned
				service. This is a contract required by data protection law, which ensures that this
				processes the personal data of our website visitors only according to our instructions and
				in compliance with the GDPR.
			</p>
			<h2 class="mt-2 font-bold">3. General Notes and Mandatory Information</h2>
			<h3 class="mt-2">Data Protection</h3>
			<p>
				The operators of these pages take the protection of your personal data very seriously. We
				treat your personal data confidentially and in accordance with the statutory data protection
				regulations and this privacy policy.
			</p>
			<p>
				When you use this website, various personal data will be collected. Personal data are data
				with which you can be personally identified. This privacy policy explains which data we
				collect and what we use them for. It also explains how and for what purpose this happens.
			</p>
			<p>
				We would like to point out that data transmission over the Internet (e.g., when
				communicating by e-mail) can have security gaps. Complete protection of data against access
				by third parties is not possible.
			</p>
			<h3 class="mt-2">Note on the responsible body</h3>
			<p>The responsible body for data processing on this website is:</p>
			<p>
				Leon Schirmer<br />
				Bachemerstraße 68<br />
				50931 Cologne
			</p>

			<p>Email: hallo@leonschirmer.dev</p>
			<p>
				The responsible body is the natural or legal person who, alone or jointly with others,
				decides on the purposes and means of processing personal data (e.g., names, e-mail
				addresses, etc.).
			</p>

			<h3 class="mt-2">Storage Duration</h3>
			<p>
				Unless a more specific storage period has been specified in this privacy policy, your
				personal data will remain with us until the purpose for which they were collected no longer
				applies. If you assert a justified request for deletion or revoke your consent to data
				processing, your data will be deleted unless we have other legally permissible reasons for
				storing your personal data (e.g., tax or commercial law retention periods); in the latter
				case, deletion will take place following these reasons.
			</p>
			<h3 class="mt-2">
				General Information on the Legal Basis for Data Processing on this Website
			</h3>
			<p>
				If you have given your consent to data processing, we process your personal data based on
				Art. 6 (1) lit. a GDPR or Art. 9 (2) lit. a GDPR if special categories of data according to
				Art. 9 (1) GDPR are processed. In the event of explicit consent to the transfer of personal
				data to third countries, data processing will also be based on Art. 49 (1) lit. a GDPR. If
				you have consented to the storage of cookies or access to information on your device (e.g.,
				via device fingerprinting), data processing will also take place based on § 25 (1) TTDSG.
				Consent can be revoked at any time. If your data are necessary for contract fulfillment or
				for the execution of pre-contractual measures, we process your data on the basis of Art. 6
				(1) lit. b GDPR. Furthermore, we process your data, if they are necessary for the
				fulfillment of a legal obligation, on the basis of Art. 6 (1) lit. c GDPR. Data processing
				can also take place based on our legitimate interest according to Art. 6 (1) lit. f GDPR.
				The respective legal bases on which processing is based are informed in the following
				sections of this privacy policy.
			</p>
			<h3 class="mt-2">Recipients of Personal Data</h3>
			<p>
				In the course of our business activities, we cooperate with various external parties. In
				some cases, this also requires the transmission of personal data to these external parties.
				We only pass on personal data to external parties if this is necessary for contract
				fulfillment, if we are legally obligated to do so (e.g., data transfer to tax authorities),
				if we have a legitimate interest in accordance with Art. 6 (1) lit. f GDPR, or if another
				legal basis permits data transfer. When using processors, we only pass on personal data of
				our customers based on a valid data processing agreement. In the case of joint processing,
				an agreement on joint processing is concluded.
			</p>
			<h3 class="mt-2">Revocation of Your Consent to Data Processing</h3>
			<p>
				Many data processing operations are only possible with your explicit consent. You can revoke
				an already given consent at any time. The legality of the data processing carried out until
				the revocation remains unaffected by the revocation.
			</p>
			<h3 class="mt-2">
				Right of Objection to Data Collection in Specific Cases and Against Direct Advertising (Art.
				21 GDPR)
			</h3>
			<p>
				IF DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 (1) LIT. E OR F GDPR, YOU HAVE THE
				RIGHT AT ANY TIME, FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION, TO OBJECT TO THE
				PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS.
				THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY.
				IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN PROVE
				COMPELLING REASONS FOR PROCESSING THAT OUTWEIGH YOUR INTERESTS, RIGHTS, AND FREEDOMS OR IF
				THE PROCESSING SERVES THE ASSERTION, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION
				ACCORDING TO ART. 21 (1) GDPR).
			</p>
			<p>
				IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT ADVERTISING PURPOSES, YOU HAVE THE RIGHT TO
				OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSE OF SUCH
				ADVERTISING; THIS ALSO APPLIES TO PROFILING IN SO FAR AS IT IS ASSOCIATED WITH SUCH DIRECT
				ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL THEN NO LONGER BE USED FOR THE PURPOSE
				OF DIRECT ADVERTISING (OBJECTION ACCORDING TO ART. 21 (2) GDPR).
			</p>
			<h3 class="mt-2">Right to lodge a complaint with the competent supervisory authority</h3>
			<p>
				In the event of violations of the GDPR, the data subjects have a right to lodge a complaint
				with a supervisory authority, especially in the member state of their habitual residence,
				place of work, or place of the alleged infringement. The right to lodge a complaint is in
				addition to any other administrative or judicial remedies.
			</p>
			<h3 class="mt-2">Right to data portability</h3>
			<p>
				You have the right to have data, which we process based on your consent or in fulfillment of
				a contract, delivered to yourself or to a third party in a standard, machine-readable
				format. If you request the direct transfer of the data to another controller, this will be
				done only if it is technically feasible.
			</p>
			<h3 class="mt-2">Information, correction and deletion</h3>
			<p>
				Within the scope of the applicable legal provisions, you have the right at any time to get
				free information about your stored personal data, their origin and recipients, and the
				purpose of data processing and, if necessary, a right to correct or delete this data. For
				this purpose, as well as for further questions on the topic of personal data, you can
				contact us at any time.
			</p>
			<h3 class="mt-2">Right to restriction of processing</h3>
			<p>
				You have the right to request the restriction of the processing of your personal data. You
				can contact us at any time regarding this. The right to restrict processing applies in the
				following cases:
			</p>
			<ul>
				<li>
					If you dispute the accuracy of your personal data stored with us, we usually need some
					time to verify this. For the duration of the verification, you have the right to request
					the restriction of the processing of your personal data.
				</li>
				<li>
					If the processing of your personal data was/is carried out unlawfully, you can request the
					restriction of data processing instead of deletion.
				</li>
				<li>
					If we no longer need your personal data, but you need them for the exercise, defense or
					assertion of legal claims, you have the right to request restriction of the processing of
					your personal data instead of deletion.
				</li>
				<li>
					If you have lodged an objection pursuant to Art. 21 (1) GDPR, a balance must be struck
					between your rights and ours. As long as it is not clear whose interests prevail, you have
					the right to demand the restriction of the processing of your personal data.
				</li>
			</ul>
			<p>
				If you have restricted the processing of your personal data, these data may – apart from
				being stored – only be processed with your consent or for the establishment, exercise or
				defense of legal claims or for the protection of the rights of another natural or legal
				person or for reasons of major public interest of the European Union or a Member State.
			</p>
			<h3 class="mt-2">SSL or TLS encryption</h3>
			<p>
				For security reasons and to protect the transmission of confidential content, such as orders
				or inquiries you send to us as the site operator, this site uses SSL or TLS encryption. You
				can recognize an encrypted connection by the browser's address line switching from "http://"
				to "https://" and by the lock icon in your browser's address bar.
			</p>
			<p>
				When SSL or TLS encryption is activated, the data you transfer to us cannot be read by third
				parties.
			</p>
			<h2 class="mt-2 font-bold">4. Data collection on this website</h2>
			<h3 class="mt-2">Server log files</h3>
			<p>
				The provider of the pages automatically collects and stores information in so-called server
				log files, which your browser automatically sends to us. These are:
			</p>
			<ul>
				<li>Browser type and browser version</li>
				<li>Operating system used</li>
				<li>Referrer URL</li>
				<li>Hostname of the accessing computer</li>
				<li>Time of the server request</li>
				<li>IP address</li>
			</ul>
			<p>These data will not be combined with data from other sources.</p>
			<p>
				The collection of this data is based on Art. 6 (1) lit. f GDPR. The website operator has a
				legitimate interest in ensuring the technically error-free presentation and optimization of
				his website – for this purpose, the server log files must be recorded.
			</p>
			<p>Source: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
		{/if}
	</div>
</main>
