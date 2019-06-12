/* eslint-disable max-len */

export const dateTimeFormats = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric"
  },
  long: {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  }
};

export default {
  about_directus: "O aplikaci Directus",
  activity: "Aktivita",
  activity_log: "Záznam aktivit",
  activity_outside_directus: "Tato položka byla vytvořena mimo administraci.",
  add_field_filter: "Přidat filtr na sloupec",
  add_new: "Přidat nový",
  add_note: "Přidat užitečné informace pro uživatele...",
  additional_info: "Dodatečné informace",
  admin_email: "Email správce",
  admin_password: "Heslo správce",
  admin_settings: "Nastavení správce",
  advanced_options: "Pokročilé možnosti",
  all: "Vše",
  almost_done_copy:
    "Každé rozhraní může být přizpůsobeno Vašim potřebám. Níže jsou uvedeny možnosti dostupné pro toto pole.",
  almost_done_options: "Téměř hotovo! Nyní jen zkontrolujte níže uvedené možnosti rozhraní.",
  api_installed: "API úspěšně nainstalováno",
  api_url: "API URL",
  auto_generate: "Auto-generování",
  auto_generated: "Automaticky generováno...",
  batch: "Dávka",
  batch_delete: "Dávka smazána",
  batch_delete_confirm:
    "Nebyly vybrány žádné položky | Opravdu chcete smazat tuto položku? Operace je nevratná. | Jste si jist(a) smazáním těchto {count} položek? Operace je nevratná.",
  batch_edit: "Hromadná úprava položek: {collection}",
  between: "Mezi",
  bookmark_global: "Globální: Všichni uživatelé",
  bookmark_personal: "Osobní: Jen já",
  bookmark_role: "Role: {role}",
  bookmarks: "Záložky",
  both: "Vše",
  cancel: "Zrušit",
  cant_disable_primary:
    "Primární klíč nelze v existujícím poli zakázat. Místo toho toto pole odeberte.",
  cant_sort_by_this_field: "Nemůžete třídit podle tohoto pole",
  change_project: "Změnit projekt",
  choose_interface: "Zvolte rozhraní pro správu těchto dat.",
  choose_one: "Vybrat jeden",
  choose_project: "Vyberte projekt",
  clear: "Vyčistit",
  click_to_toggle_all_none: "Kliknutím zapnete/vypnete celý sloupec",
  collection: "Kategorie",
  collection_contains_items: "{collection} obsahuje {count} položek",
  collection_count: "Žádné kategorie | Počet kategorií: 1 | Počet kategorií: {count}",
  collection_invalid_name: "Neplatný název kategorie",
  collection_names_cannot_be_changed: "Název kategorie nemůže být v současné chvíli změněn.",
  collection_removed: "Kategorie {collection} byla smazána",
  collection_updated: "Kategorie {collection} byla akatualizována",
  collections: "Kategorie",
  "collections-directus_activity": "Aktivita",
  "collections-directus_files": "Soubory",
  "collections-directus_users": "Uživatelé",
  collections_and_fields: "Kategorie a pole",
  comfortable: "Komfortní",
  coming_soon: "Již brzy",
  comment: "Komentář",
  comments: "Komentáře",
  compact: "Kompaktní",
  config_error: "Chybějící konfigurace",
  config_error_copy: "Zkontrolujte, zda jste vytvořili konfigurační soubor aplikace",
  confirm: "Potvrdit",
  connection: "Připojení",
  contains: "Obsahuje",
  cozy: "Pohodlný",
  create: "Vytořit",
  create_collection: "Vytvořit kategorii",
  create_field: "Vytvořit pole",
  create_role: "Vytvořit roli",
  created_by: "Vytvořil/-a",
  created_on: "Vytvořeno",
  creating_item: "Vytvořit položku",
  creating_item_page_title: "Vytvořit položku: {collection}",
  creating_role: "Vytváření role",
  currently_selected: "Vybráno: {thing}",
  database_connection: "Připojení k databázi",
  database_connection_copy:
    "Dále potřebujeme vědět, jak se připojit k databázi, kde bude tento projekt spravován.",
  datatype: "Datový typ",
  datatypes: {
    mysql: {
      BIGINT:
        "Celé číslo. Se znaménkem (povolena záporná čísla) je délka -9 223 372 036 854 775 808 až 9 223 372 036 854 775 807, jinak je maximum 18 446 744 073 709 551 615.",
      BOOLEAN: "Pravda nebo nepravda. Uloží se buď 1 nebo 0.",
      CHAR:
        "Nebinární textový řetězec s pevnou délkou, který je zprava doplněn mezerami. Délka může být 0 až 255 znaků.",
      DATE: "Datum. Dovoluje `1000-01-01` až `9999-12-31`.",
      DATETIME: "Datum a čas. Dovoluje `1000-01-01 00:00:00` až `9999-12-31 23:59:59`.",
      DECIMAL:
        "Přesné číslo (např.: pro měnu) s délkou 1 až 65 číslic (L) a 0 až 30 desetinných míst (D). Formát délky: `L,D`",
      DOUBLE: "Přibližné binární číslo, 8 bajtů s desetinnou čárkou.",
      FLOAT: "Přibližné binární číslo, 4 bajty s desetinnou čárkou.",
      INT:
        "Celé číslo. Se znaménkem (povolena záporná čísla) je délka -2 147 483 648 až 2 147 483 647, jinak je maximum 4 294 967 295.",
      LONGTEXT: "Text s maximální délkou 4 294 967 295 znaků.",
      MEDIUMINT:
        "Celé číslo. Se znaménkem (povolena záporná čísla) je délka -8 388 608 až 8 388 607, jinak je maximum 16 777 215.",
      MEDIUMTEXT: "Text s maximální délkou 16 777 215 znaků.",
      SMALLINT:
        "Celé číslo. Se znaménkem (povolena záporná čísla) je délka -32 768 až 32 767, jinak je maximum 65 535.",
      TEXT: "Text s maximální délkou 65 535 znaků.",
      TIME: "Čas. Dovoluje `-838:59:59` až `838:59:59`.",
      TIMESTAMP: "Datum a čas. Dovoluje `1970-01-01 00:00:01` UTC až `2038-01-19 03:14:07` UTC.",
      TINYINT:
        "Celé číslo. Se znaménkem (povolena záporná čísla) je délka -128 až 127, jinak je maximum 255.",
      TINYTEXT: "Text s maximální délkou 255 znaků.",
      VARCHAR:
        "Nebinární textový řetězec s variabilní délkou. Délka může být 0 až 65 535 znaků (MySQL 5.0.3+).",
      YEAR: "Rok. Dovoluje `1901` až `2155` nebo `0000`"
    }
  },
  date_and_time: "Datum a čas",
  db_column_name: "Název sloupce databáze...",
  db_datatype: "{db} datový typ",
  db_name: "Název databáze",
  db_password: "Uživatelské heslo k databázi",
  db_type: "Typ databáze",
  db_update_failed: "Databáze nemůže být aktualizována.",
  db_updated: "Databáze úspěšně aktualizována",
  db_user: "Databázový uživatel",
  default: "Výchozí",
  default_value: "Výchozí hodnota",
  delete: "Smazat",
  delete_are_you_sure: "Opravdu chcete smazat tuto položku? Operace je nevratná.",
  delete_bookmark: "Smazat záložku",
  delete_bookmark_body: "Opravdu chcete tuto záložku smazat? Tuto akci nelze vrátit zpět.",
  delete_collection_are_you_sure:
    "Opravdu chcete tuto kategorii smazat? Tuto akci nelze vrátit zpět.",
  delete_confirmation: "Potvrzení smazání",
  delete_field_are_you_sure: 'Opravdu chcete smazat pole "{field}"? Tuto akci nelze vrátit zpět.',
  delete_role_are_you_sure: 'Opravdu chcete smazat roli "{name}"? Tuto akci nelze vrátit zpět.',
  description: "Popis",
  dialog_beginning: "Začátek dialogového okna.",
  discard_changes: "Ano, odejít bez uložení",
  display_name: "Zobrazit jméno",
  done: "Hotovo",
  dont_manage: "Nespravovat",
  dont_manage_copy:
    "Oprávnění, předvolby a nastavení kategorie {collection} budou ze systému trvale odstraněny! Jiste si jistý/-á?",
  dont_show: "Nezobrazovat",
  drop_files: "Nelze přesunout soboury | Přesuňte soubor sem... | Přesuňte soubory sem...",
  duplicate: "Duplikovat",
  duplicating_field: "Duplikace pole",
  editing: "Úprava položky: {collection}",
  editing_item: "Úprava položky",
  editing_items: "Hromadná úprava {count} položek",
  editing_my_profile: "Upravit můj profil",
  editing_single: "Úprava {collection}",
  email: "Email",
  email_address: "Emailová adresa",
  embed: "Vložení",
  embed_placeholder: "YouTube, Vimeo, nebo jiný odkaz",
  empty_collection: "Kategorie je prázdná ",
  empty_collection_body: "V této kategorii ještě nejsou žádné položky",
  enable_manual_sorting: "Zapnout manuální řazení",
  enter_collection_name: "Zadejte název kategorie...",
  enter_role_name: "Zadejte název role...",
  enter_value: "Zadejte hodnotu",
  environment: "Prostředí",
  equal_to: "Je rovno",
  error_unknown: "Neznámá chyba. Zkuste to později.",
  errors: {
    "11": "Nelze se připojit k databázi",
    "100": "Nesprávné uživatelské jméno a/nebo heslo",
    "101": "Odhlášení kvůli nečinnosti",
    "102": "Odhlášení kvůli nečinnosti",
    "103": "Uživatel neaktivní",
    "106": "Nesprávné uživatelské jméno a/nebo heslo",
    "107": "Uživatel nenalezen",
    "-1": "API je nedostupné"
  },
  esc_cancel: "Klávesa Escape zruší a zavře okno.",
  event_count: "Žádné události | Jedna událost | {count} událostí",
  existing: "Vybrat existující",
  extension_error: "Při načítání rozšíření {ext} došlo k potížím.",
  extensions_missing: "Nenalezena žádná rozšíření",
  extensions_missing_copy: "Ujistěte se, že máte nainstalovaná rozšíření systému.",
  fetching_data: "Načítání dat",
  field: "Sloupec",
  field_already_exists: "{field} již existuje",
  field_created: "Pole {field} vytvořeno",
  field_removed: "Pole {field} smazáno",
  field_type: "Typ pole",
  field_updated: "Pole {field} aktualizováno",
  field_width: "Šířka pole",
  fields: "Sloupce",
  fields_are_saved_instantly: "Změny jsou ukládány okamžitě",
  fieldtypes: {
    alias: "Pole, která neukládají data nebo nemají odpovídající sloupce databáze",
    array: "Standardní formát pole v API odpovědi",
    date: "Datum, např.: 2018-09-19",
    datetime: "Datum a čas ve formátu ISO, např.: 2018-09-19T14:00:43.381Z",
    datetime_created:
      "Systémové pole pro sledování data a času vytvořené položky, používáno pro revize",
    datetime_updated:
      "Systémové pole pro sledování data a času aktualizované položky, používáno pro revize",
    decimal: "Číslo, které obsahuje desetinné číslo",
    file: "Cizí klíč k directus_files.id",
    group: "Groups fields together visually, children save group into directus_fields.group",
    integer: "Celé číslo",
    json: "Standardní JSON formát v API odpovědi",
    lang: "Specifické pro překladová rozhraní, toto ukládá klíč jazyka",
    m2o: "Vztah N:1",
    managed: "Spravováno",
    o2m: "Vztah 1:N",
    sort: "Systémové pole pro drag&drop řazení položek",
    status: "Systémové pole používané pro publikování workflow",
    string:
      "Any text, numbers, spaces, or symbols; defined and limited by its length (number of characters)",
    time: "Čas, např.: 14:09:22",
    translation: "Specifické pro překladová rozhraní, toto spojení 1:N ukládá vícejazyčný obsah",
    user_created:
      "Systémové pole pro sledování uživatele, který vytvořil položku, používáno pro revize",
    user_updated:
      "Systémové pole pro sledování uživatele, který aktualizoval položku, používáno pro revize",
    uuid: "Univerzálně jedinečný identifikátor"
  },
  file: "Soubor",
  file_library: "Složka souborů",
  file_type_not_accepted:
    "{filename} nemůže být nahrán. Nejedná se o správný typ souboru pro toto pole.",
  file_upload: "Nahrát soubor(y)",
  forgot_password: "Zapomenuté heslo",
  greater_than: "Větší než",
  greater_than_equal: "Větší nebo rovno než",
  help_and_docs: "Nápověda a dokumentace",
  hidden: "Skryté",
  hidden_browse: "Skryté v přehledu",
  hidden_detail: "Skryté v detailu",
  host: "Host",
  icon: "Ikona",
  in_list: "Jeden z těchto",
  info: "Info",
  initial_schema: "Zvolte počáteční schéma",
  initial_schema_copy:
    "Vyberte si ze stávajících databázových architektur nebo začněte zčista. Toto můžete rozšířit a doladit kdykoliv později.",
  install: "Instalovat",
  install_copy: "Toto API dosud nebylo nastaveno. Chcete jej nainstalovat a nakonfigurovat nyní?",
  intelligent_defaults:
    "Pokročilé volby umožňují konfigurovat, jak budou data uložena v databázi a vyladit další nastavení aplikace.",
  interface: "Rozhraní",
  interface_count: "Žádná rozhraní | Jedno rozhraní | {count} rozhraní",
  interface_settings:
    "Každé rozhraní může být dokonale přizpůsobeno Vašim potřebám. Níže jsou uvedeny dostupné možnosti tohoto rozhraní, ale pouze některé z nich jsou vyžadovány.",
  interfaces: "Rozhraní",
  is_empty: "Je prázné",
  is_not_null: "Není NULL",
  is_null: "Je NULL",
  item_count: "Bez výsledků | Jeden výsledek | Výsledků: {count}",
  item_count_filter: "Žádné výsledky | Jeden výsledek | {count} výsledků",
  item_deleted: "Položka smazána",
  item_saved: "Položka uložena | Uloženo položek: {count}",
  junction_collection: "Spojovací kategorie",
  keep_editing: "Ne, vrátit se k úpravám",
  latency: "Latence",
  learn_more: "Zjistit více",
  leave_comment: "Napsat komentář...",
  length: "Délka",
  length_disabled_placeholder: "Délka je určena datovým typem",
  less_than: "Méně než",
  less_than_equal: "Méně nebo rovno než",
  limited: "Omezeno",
  loading: "Nahrávám...",
  loading_more: "Náhrávám více položek...",
  login: "Přihlásit",
  m2m: "Spojení M:N",
  m2o: "Spojení N:1",
  manage: "Spravovat",
  manage_started: "Správa {collection} zahájena",
  manage_stopped: "Správa {collection} zastavena",
  max_one_primary_key: "Můžete mít pouze 1 pole s primárním klíčem pro danou kategorii",
  max_size: "Max. velikost: {size}",
  mixed: "Smíšené",
  modified_by: "Upravil/-a",
  modified_on: "Upraveno",
  more_options: "Více možností",
  my_activity: "Moje aktivity",
  my_profile: "Můj profil",
  name: "Jméno",
  name_bookmark: "Jak chcete pojmenovat tuto záložku?",
  name_field: "Pojmenujte položku {field} a přidejte užitečnou poznámku pro uživatele.",
  navigate_changes:
    "Opravdu chcete opustit tuto stránku? Pokud opustíte stránku, Vaše úpravy budou ztraceny.",
  new: "Nový",
  new_field: "Nové pole",
  new_file: "Nový soubor",
  next: "Další",
  no_collections: "Žádné nastavení kategorií",
  no_collections_body: "Vypadá to, že zatím nejsou k dispozici žádná nastavení kategorií",
  no_fields: "Žádné nastavení polí",
  no_fields_body: "Vypadá to, že tato kategorie ještě nemá žádné nastavení",
  no_files: "Bez souborů",
  no_files_body: "Vypadá to, že zatím nebyly nahrány žádné soubory",
  no_interface_error: "Pole {field} nemá nastavení rozhraní",
  no_related_entries: "Žádné související záznamy",
  no_results: "Bez výsledků",
  no_results_body: "Podle zadaných filtrů nebyly nalezeny žádné položky",
  none: "Žádný",
  not_between: "Není mezi",
  not_contains: "Neobsahuje",
  not_empty: "Není prázdné",
  not_equal_to: "Nerovná se",
  not_in_list: "Ani jeden z uvedených",
  note: "Poznámka",
  note_hidden: "[Dozvědět se více](https://docs.directus.io/guides/collections.html#hidden)",
  note_icon: "Ikona zobrazená v postranním panelu aplikace",
  note_managed:
    "[Dozvědět se více](https://docs.directus.io/guides/collections.html#managing-collections)",
  note_note: "Interní popis...",
  note_single: "[Dozvědět se více](https://docs.directus.io/guides/collections.html#single)",
  notifications: "Notifikace",
  numeric: "Číselné",
  o2m: "Spojení 1:N",
  ok: "OK",
  open_on_gh: "Otevřít na GitHubu",
  operator: "Operátor",
  optional: "Nepovinné",
  options: "Možnosti",
  other: "Další",
  page_not_found: "Stránka nenalezena",
  page_not_found_body: "Hledaná stránka nebyla nalezena.",
  password: "Heslo",
  password_reset_sent: "Email pro obnovení hesla odeslat na {email}",
  permission_states: {
    always: "Vždy",
    create: "Vytvoření",
    full: "Vše",
    mine: "Pouze mé",
    none: "Žádné",
    on_create: "Při vytvoření",
    on_update: "Při úpravě",
    read: "Pouze pro čtení",
    role: "Pouze role",
    update: "Úpravy"
  },
  permissions: "Oprávnění",
  permissions_admin:
    "Správci mají ve výchozím nastavení přístup ke všem spravovaným datům v systému.",
  permissions_no_collections: "Tento projekt zatím nemá žádné kategorie.",
  popular: "Populární",
  port: "Port",
  powered_by_directus: "Používá řešení Directus",
  preview_and_revert: "Náhled a vrácení",
  primary_key: "Primární klíč",
  project: "Projekr",
  project_info: "Informace o projektu",
  project_info_copy:
    "Níže je uvedeno několik otázek týkajících se vašeho projektu, včetně přihlašovacích údajů prvního správce.",
  project_key: "Klíč projektu",
  project_name: "Název projektu",
  read: "Číst",
  readable_fields: "Pole pro čtení",
  readable_fields_copy: "Vyberte pole, která může uživatel vidět",
  readonly: "Pouze pro čtení",
  regex: "RegEx",
  related_collection: "Související kategorie",
  related_entries: "Obsahuje související položky",
  relation_setup: "Vzhledem k tomu, že se jedná o relační pole, musíme namapovat související pole.",
  relation_setup_copy:
    "Existují různé typy relačních dat, toto rozhraní používá jeden nazývaný {relation}.",
  relational: "Relační",
  relationship: "Vztah",
  remove: "Odebrat",
  remove_related: "Odstranit související položku",
  report_issue: "Oznámit problém",
  request_feature: "Požadavek na funkci",
  required: "Povoleno",
  reset_password: "Obnovit heslo",
  reset_preferences: "Obnovit všechny předvolby seznamu",
  revert: "Vrátit",
  revert_copy: "Opravdu chcete vrátit veškeré změny této položky k {date}?",
  role_count: "Žádné role | Jedna role | {count} rolí",
  role_settings: "Nastavení rolí",
  roles: "Uživatelské role",
  save: "Uložit",
  save_and_add: "Uložit a přidat další",
  save_and_stay: "Uložit a zůstat",
  save_as_bookmark: "Uložit jako záložku",
  save_as_copy: "Uložit jako kopii",
  schema: "Schéma",
  search: "Vyhledat",
  search_interface: "Hledat rozhraní...",
  select_existing: "Vybrat z uložených",
  select_field: "Vybrat položky",
  select_fields: "Vybrat pole",
  select_from_device: "Vybrat ze zařízení",
  select_interface_below: "Vyberte rozhraní níže",
  select_statuses: "Vybrat stavy",
  select_statuses_copy: "Vyberte stavy, které může uživatel použít",
  server_details: "Detaily serveru",
  server_error: "Chyba serveru",
  server_error_copy: "Se serverem nebo databází této instance je něco v nepořádku.",
  server_trouble: "Problémy se serverem",
  server_trouble_copy: "Zkuste to znovu později nebo se obraťte na pomoc správce systému.",
  settings: "Nastavení",
  settings_collections_fields: "Kotegorie a pole",
  settings_extensions: "Rozšíření",
  settings_global: "Globální nastavení",
  settings_permissions: "Role a oprávnění",
  settings_project: "Nastavení projektu",
  settings_saved: "Nastavení uložena",
  settings_update_database: "Aktualizovat databázi",
  settings_update_database_confirm:
    "Tím se aktualizuje databázové schéma tak, aby fungovalo s nejnovější verzí rozhraní Directus. Před spuštěním této operace vždy vytvořte zálohu databáze.",
  settings_update_database_subtext: "Spustit skript",
  show_directus_collections: "Zobrazit kategorie systému Directus",
  sign_in: "Přihlásit se",
  sign_out: "Odhlásit se",
  sign_out_confirm: "Chcete se odhlásit?",
  sign_out_confirm_edits: "Opravdu se chcete odhlásit? Všechny neuložené změny budou ztraceny.",
  signing_in: "Přihlašování",
  single: "Samostatný",
  something_went_wrong: "Něco se pokazilo.",
  something_went_wrong_body:
    "Požadavek na zpracování chyb. Zkuste to znovu po aktualizaci stránky.",
  sort: "Řazení",
  sort_by: "Řadit podle",
  spacing: "Odsazení",
  status: "Status",
  statuses: "Statusy",
  submit: "Potvrdit",
  text: "Text",
  this_collection: "Tato kategorie",
  to: "Pro",
  unique: "Unikátní",
  unsaved_changes_copy: "Máte neuložené změny. Opravdu chcete opustit stránku?",
  update: "Aktualizovat",
  update_confirm: "Opravdu chcete aktualizovat {count} položek?",
  update_field: "Upravit pole",
  upload_exceeds_max_size:
    "{filename} nemůže být nahrát. Váš server není nakonfigurován pro zpracování takto velkých souborů.",
  user_directory: "Uživatelé",
  user_edit_warning:
    "{first_name} {last_name} také upravuje tuto položku. Prosím, dejte si pozor, abyste si nepřepsali své změny.",
  validation: "Validace",
  value: "Hodnota",
  values: "Hodnoty",
  version: "Verze",
  version_and_updates: "Verze a aktualizace",
  view_type: "Zobrazit jako...",
  visible_all_users: "Zobrazit pro všechny uživatele",
  welcome: "Vítejte",
  writable_fields: "Zapisovatelná pole",
  writable_fields_copy: "Vyberte pole, které uživatel může upravovat",
  yes: "Ano"
};
