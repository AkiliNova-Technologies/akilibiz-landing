export type DocsSectionId = "start" | "run" | "manage" | "help";

export type DocsCalloutKind = "tip" | "important" | "before";

export type DocsTroubleshootingItem = {
  problem: string;
  solution: string;
};

export type DocsGuide = {
  slug: string;
  section: DocsSectionId;
  group: string;
  navLabel: string;
  title: string;
  summary: string;

  /**
   * Explains why the user would perform this task.
   */
  purpose: string;

  /**
   * Optional things the user should have ready before following the guide.
   */
  prerequisites?: string[];

  /**
   * Ordered instructions for completing the task.
   */
  steps: string[];

  /**
   * What the user should expect after completing the guide.
   */
  expectedResult?: string;

  /**
   * Common problems users may encounter.
   */
  troubleshooting?: DocsTroubleshootingItem[];

  /**
   * Short operational or safety information.
   */
  callout?: {
    title: string;
    text: string;
    kind: DocsCalloutKind;
  };

  /**
   * Slugs of guides that naturally follow this guide.
   */
  relatedGuides?: string[];
};

export const docsSections: Array<{
  id: DocsSectionId;
  label: string;
}> = [
  { id: "start", label: "Getting Started" },
  { id: "run", label: "Daily Operations" },
  { id: "manage", label: "Administration & Safety" },
  { id: "help", label: "Support & Resources" },
];

export const docsGuides: DocsGuide[] = [
  // ---------------------------------------------------------------------------
  // START
  // ---------------------------------------------------------------------------

  {
    slug: "install-akilibiz",
    section: "start",
    group: "Setup",
    navLabel: "Install",
    title: "Install AkiliBiz Desktop",
    summary:
      "Download and install AkiliBiz Desktop on the computer your business will use for daily operations.",
    purpose:
      "Prepare a reliable primary workspace for recording sales, stock, customers, suppliers, finances, and other business activity.",

    prerequisites: [
      "A supported Windows, macOS, or Linux computer.",
      "Enough storage space for AkiliBiz and future business records.",
      "Internet access for downloading the installer.",
      "Permission to install applications on the computer.",
    ],

    steps: [
      "Open the AkiliBiz Download page.",
      "Choose the installer that matches your operating system.",
      "Download the installer to your computer.",
      "Open the downloaded file.",
      "Follow the installation instructions shown by your operating system.",
      "When installation finishes, open AkiliBiz Desktop.",
      "Complete the initial application setup when prompted.",
      "Confirm that AkiliBiz opens correctly before beginning business setup.",
    ],

    expectedResult:
      "AkiliBiz Desktop should open successfully and be ready for you to configure your business.",

    troubleshooting: [
      {
        problem: "The installer does not open.",
        solution:
          "Confirm that you downloaded the correct installer for your operating system and that your user account has permission to install applications.",
      },
      {
        problem: "The operating system displays a security warning.",
        solution:
          "Confirm that the installer was downloaded from the official AkiliBiz website before continuing.",
      },
    ],

    callout: {
      title: "Before you begin",
      text:
        "Choose a computer that is available to the business regularly. AkiliBiz Desktop currently stores operational data locally, while multi-device synchronisation is planned for a future release.",
      kind: "before",
    },

    relatedGuides: ["setup-workspace", "secure-your-account"],
  },

  {
    slug: "secure-your-account",
    section: "start",
    group: "Setup",
    navLabel: "Account security",
    title: "Secure your AkiliBiz account",
    summary:
      "Set up account access carefully before business records are created.",
    purpose:
      "Protect business information from unauthorised access and make sure staff use their own accounts.",

    steps: [
      "Create or configure the administrator account used to manage AkiliBiz.",
      "Use a password that is difficult for other people to guess.",
      "Do not share the administrator password with staff members.",
      "Create separate staff accounts for people who need to use AkiliBiz.",
      "Give each staff member only the permissions required for their responsibilities.",
      "Review staff access whenever someone changes roles or leaves the business.",
    ],

    expectedResult:
      "The business has a protected administrator account and staff access can be managed separately.",

    callout: {
      title: "Important",
      text:
        "Avoid allowing several employees to share one account. Individual accounts make permissions and activity records more useful.",
      kind: "important",
    },

    relatedGuides: ["staff-roles", "setup-workspace"],
  },

  {
    slug: "setup-workspace",
    section: "start",
    group: "Setup",
    navLabel: "Business setup",
    title: "Set up your business workspace",
    summary:
      "Add the business information AkiliBiz will use throughout your records.",
    purpose:
      "Create a recognisable and consistent business workspace before operational records are entered.",

    prerequisites: [
      "Your business name.",
      "Business contact information you want recorded in AkiliBiz.",
      "Any relevant tax or registration information available to you.",
    ],

    steps: [
      "Open Settings.",
      "Go to the business profile or business information area.",
      "Enter the official or commonly used business name.",
      "Add the contact and identification information required by your business.",
      "Review regional, currency, language, and other available business settings.",
      "Save the changes.",
      "Review the information again before staff begin recording transactions.",
    ],

    expectedResult:
      "AkiliBiz contains the core information required to identify your business and organise its records.",

    callout: {
      title: "Tip",
      text:
        "Enter business information consistently. These details may later be used across reports, receipts, exports, and connected AkiliBiz services.",
      kind: "tip",
    },

    relatedGuides: [
      "products-and-categories",
      "opening-stock",
      "staff-roles",
    ],
  },

  {
    slug: "products-and-categories",
    section: "start",
    group: "Catalogue",
    navLabel: "Products",
    title: "Add products and categories",
    summary:
      "Create an organised catalogue of the products your business sells.",
    purpose:
      "Make products easy for staff to find while keeping sales and inventory records consistent.",

    prerequisites: [
      "A list of the products your business currently sells.",
      "Selling prices for the products.",
      "A simple category structure for organising the catalogue.",
    ],

    steps: [
      "Open Categories.",
      "Create broad categories that match how your business organises products.",
      "Avoid creating several categories that mean almost the same thing.",
      "Open Products.",
      "Create a product and choose the appropriate category.",
      "Enter a clear product name.",
      "Add the relevant selling price and other available product information.",
      "Save the product.",
      "Repeat the process for the remaining products.",
      "Review the catalogue for duplicates or inconsistent names.",
    ],

    expectedResult:
      "Your products are organised into categories and are available for use in inventory and sales.",

    troubleshooting: [
      {
        problem: "Staff cannot easily find a product.",
        solution:
          "Use shorter, recognisable product names and organise products using clear categories.",
      },
      {
        problem: "The same product appears more than once.",
        solution:
          "Review existing products before creating another record. Avoid creating duplicate product entries for the same stock item.",
      },
    ],

    callout: {
      title: "Tip",
      text:
        "Use consistent product names. For example, choose one naming style such as “Coca-Cola 500ml” instead of creating several variations for the same item.",
      kind: "tip",
    },

    relatedGuides: ["opening-stock", "import-csv", "first-sale"],
  },

  {
    slug: "opening-stock",
    section: "start",
    group: "Catalogue",
    navLabel: "Opening stock",
    title: "Record your opening stock",
    summary:
      "Enter the stock already available when your business starts using AkiliBiz.",
    purpose:
      "Give AkiliBiz an accurate starting quantity before new sales and stock movements are recorded.",

    prerequisites: [
      "Products must already exist in AkiliBiz.",
      "Perform a physical stock count where practical.",
      "Have the current quantity of each product available.",
    ],

    steps: [
      "Count the physical stock currently available for each product.",
      "Open Inventory.",
      "Find the product whose opening quantity you want to record.",
      "Use the available stock adjustment or opening stock workflow.",
      "Enter the quantity currently available.",
      "Enter any relevant cost information requested by AkiliBiz.",
      "Review the values before confirming.",
      "Repeat the process for the remaining products.",
      "Compare the final AkiliBiz quantities with your physical count.",
    ],

    expectedResult:
      "Inventory quantities in AkiliBiz reflect the stock your business had when it began using the system.",

    callout: {
      title: "Important",
      text:
        "Opening stock should represent the actual quantity available. Incorrect starting quantities will affect later inventory reports.",
      kind: "important",
    },

    relatedGuides: ["inventory", "first-sale"],
  },

  {
    slug: "first-sale",
    section: "start",
    group: "First day",
    navLabel: "First sale",
    title: "Make your first sale",
    summary:
      "Record a sale and confirm that it appears correctly in AkiliBiz.",
    purpose:
      "Verify that your products, prices, inventory, and sales workflow are ready for daily use.",

    prerequisites: [
      "Your business workspace should be configured.",
      "At least one product should exist.",
      "Inventory should be entered for stock-controlled products.",
    ],

    steps: [
      "Open the Point of Sale.",
      "Search for or select the product being sold.",
      "Add the required quantity.",
      "Add other products included in the transaction.",
      "Select or add a customer if the sale needs to be associated with one.",
      "Review quantities, prices, discounts, taxes, and totals where applicable.",
      "Choose the appropriate available payment method.",
      "Complete the sale.",
      "Open Sales History.",
      "Confirm that the transaction appears with the expected total.",
      "Check Inventory to confirm stock changed as expected.",
    ],

    expectedResult:
      "The sale appears in Sales History and related inventory records reflect the completed transaction.",

    callout: {
      title: "Before completing the sale",
      text:
        "Always review quantities and totals before confirming a transaction. Completed business records should reflect what actually happened at the point of sale.",
      kind: "before",
    },

    relatedGuides: ["point-of-sale", "sales-history", "inventory"],
  },

  // ---------------------------------------------------------------------------
  // RUN
  // ---------------------------------------------------------------------------

  {
    slug: "point-of-sale",
    section: "run",
    group: "Sales",
    navLabel: "Point of sale",
    title: "Use the Point of Sale",
    summary:
      "Process everyday customer sales using the AkiliBiz Point of Sale.",
    purpose:
      "Record transactions consistently while keeping sales and inventory information connected.",

    steps: [
      "Open Point of Sale.",
      "Search for products by their names or available identifiers.",
      "Add the products the customer is purchasing.",
      "Adjust quantities when more than one unit is being sold.",
      "Review the cart before payment.",
      "Select a customer when the transaction needs to be associated with a customer record.",
      "Choose the appropriate available payment option.",
      "Confirm the amount received or payment information.",
      "Complete the sale.",
      "Verify the completed transaction when necessary using Sales History.",
    ],

    expectedResult:
      "The transaction is recorded and becomes available to sales, inventory, finance, and reporting workflows as applicable.",

    callout: {
      title: "Important",
      text:
        "Do not complete test transactions using real business records unless you intend them to remain part of your business history.",
      kind: "important",
    },

    relatedGuides: ["sales-history", "inventory", "customers-and-credit"],
  },

  {
    slug: "sales-history",
    section: "run",
    group: "Sales",
    navLabel: "Sales history",
    title: "Review sales history",
    summary:
      "Find and review transactions that have already been recorded.",
    purpose:
      "Confirm previous sales, investigate transaction questions, and support daily reconciliation.",

    steps: [
      "Open Sales History.",
      "Use the available date or search filters to narrow the records.",
      "Locate the transaction you want to review.",
      "Open the transaction details.",
      "Review products, quantities, totals, customer information, and payment details where available.",
      "Compare the transaction with supporting records when investigating a discrepancy.",
    ],

    expectedResult:
      "You can identify and review recorded transactions without changing the original business history.",

    relatedGuides: ["point-of-sale", "vat-and-reports"],
  },

  {
    slug: "inventory",
    section: "run",
    group: "Stock",
    navLabel: "Inventory",
    title: "Manage inventory",
    summary:
      "Track quantities, record adjustments, and identify products that may need restocking.",
    purpose:
      "Maintain a dependable view of the physical stock available to your business.",

    prerequisites: [
      "Products should already exist.",
      "Opening stock should be entered before normal operations where applicable.",
    ],

    steps: [
      "Open Inventory.",
      "Review the current quantity for each product.",
      "Use search and available filters to find specific stock.",
      "Review low-stock or stock status information where available.",
      "When stock physically changes outside a normal sale, use the appropriate stock adjustment workflow.",
      "Enter the actual quantity or adjustment.",
      "Provide a clear reason when AkiliBiz requests one.",
      "Confirm the stock movement.",
      "Review inventory history when investigating unexpected quantities.",
      "Periodically compare AkiliBiz quantities with a physical stock count.",
    ],

    expectedResult:
      "The inventory record reflects stock movements recorded by the business and can support restocking and reporting decisions.",

    troubleshooting: [
      {
        problem: "AkiliBiz quantity is different from physical stock.",
        solution:
          "Review recent sales and stock movements first. If the difference is genuine, record a documented stock adjustment rather than silently ignoring the discrepancy.",
      },
      {
        problem: "A product frequently reaches zero unexpectedly.",
        solution:
          "Review sales volume, stock adjustments, and restocking practices. Consider setting or monitoring an appropriate low-stock threshold where supported.",
      },
    ],

    callout: {
      title: "Important",
      text:
        "Avoid changing stock simply to make a report look correct. Every adjustment should represent a real business event such as damaged stock, corrections, losses, or newly received stock.",
      kind: "important",
    },

    relatedGuides: ["opening-stock", "stock-adjustments", "vat-and-reports"],
  },

  {
    slug: "stock-adjustments",
    section: "run",
    group: "Stock",
    navLabel: "Adjust stock",
    title: "Record stock adjustments",
    summary:
      "Correct inventory when physical stock changes outside the normal sales workflow.",
    purpose:
      "Keep inventory accurate while preserving a clear record of why quantities changed.",

    steps: [
      "Verify the physical quantity before making an adjustment.",
      "Open Inventory.",
      "Find the affected product.",
      "Open the stock adjustment action.",
      "Enter the required quantity change.",
      "Provide the reason for the adjustment where requested.",
      "Review the resulting quantity.",
      "Confirm the adjustment.",
      "Check the inventory history to verify that the movement was recorded.",
    ],

    expectedResult:
      "The stock quantity is corrected and the adjustment remains identifiable in inventory history.",

    callout: {
      title: "Important",
      text:
        "Use adjustments for genuine stock corrections. Normal customer sales should be recorded through the Point of Sale.",
      kind: "important",
    },

    relatedGuides: ["inventory"],
  },

  {
    slug: "customers-and-credit",
    section: "run",
    group: "People",
    navLabel: "Customers",
    title: "Manage customers and credit sales",
    summary:
      "Keep customer information and outstanding balances organised.",
    purpose:
      "Make customer identification, transaction history, and credit follow-up easier.",

    steps: [
      "Open Customers.",
      "Create a customer record when you need to identify transactions belonging to that customer.",
      "Enter recognisable customer information.",
      "Save the customer.",
      "Select the customer during relevant sales.",
      "When credit is permitted by your business workflow, ensure the correct customer is selected before completing the transaction.",
      "Review outstanding customer balances regularly.",
      "Record payments using the appropriate AkiliBiz workflow when money is received.",
      "Compare outstanding balances with supporting business records during reconciliation.",
    ],

    expectedResult:
      "Customer transactions can be associated with identifiable records and outstanding balances can be followed up more reliably.",

    callout: {
      title: "Important",
      text:
        "Only provide credit according to your business's own credit policy. AkiliBiz records credit activity but does not determine whether a customer should receive credit.",
      kind: "important",
    },

    relatedGuides: ["point-of-sale", "vat-and-reports"],
  },

  {
    slug: "suppliers",
    section: "run",
    group: "People",
    navLabel: "Suppliers",
    title: "Manage suppliers",
    summary:
      "Keep the people and businesses that supply your stock organised.",
    purpose:
      "Maintain supplier information that can support purchasing, stock management, and payable records.",

    steps: [
      "Open Suppliers.",
      "Choose the option to add a supplier.",
      "Enter a clear supplier or company name.",
      "Add useful contact information.",
      "Save the supplier record.",
      "Update supplier information when contact details change.",
      "Avoid creating duplicate records for the same supplier.",
      "Review supplier information when reconciling stock or payable activity.",
    ],

    expectedResult:
      "Supplier information is organised and available to related business workflows.",

    relatedGuides: ["inventory", "vat-and-reports"],
  },

  {
    slug: "finance-overview",
    section: "run",
    group: "Finance",
    navLabel: "Finance",
    title: "Understand the Finance overview",
    summary:
      "Review the financial information generated from business activity recorded in AkiliBiz.",
    purpose:
      "Give business owners a clearer view of money-related activity without relying entirely on scattered manual records.",

    steps: [
      "Open Finance.",
      "Choose the period you want to review where filters are available.",
      "Review the available sales, receivable, payable, journal, or financial information.",
      "Compare unusual figures with the transactions that produced them.",
      "Check Sales History, customers, suppliers, or inventory when investigating differences.",
      "Export or retain supporting records where your workflow requires them.",
    ],

    expectedResult:
      "You can connect day-to-day operational activity with the financial information shown by AkiliBiz.",

    callout: {
      title: "Important",
      text:
        "Business reports are only as reliable as the transactions entered into AkiliBiz. Missing or incorrect sales, stock, customer, or supplier records can affect the figures you see.",
      kind: "important",
    },

    relatedGuides: ["vat-and-reports", "sales-history"],
  },

  {
    slug: "vat-and-reports",
    section: "run",
    group: "Reports",
    navLabel: "Reports",
    title: "Use VAT information, reports, and Business Insights",
    summary:
      "Review business performance using the records collected by AkiliBiz.",
    purpose:
      "Help you understand sales, stock, customers, suppliers, receivables, payables, and other business activity.",

    prerequisites: [
      "Record business transactions consistently.",
      "Use the correct products, customers, suppliers, and stock movements.",
      "Choose the reporting period that matches the question you are investigating.",
    ],

    steps: [
      "Open Reports or Business Insights.",
      "Choose the report or dashboard relevant to the information you need.",
      "Set the appropriate date range where available.",
      "Review totals and trends.",
      "Investigate unusual figures by checking the underlying transactions.",
      "Compare AkiliBiz reports with supporting records where required.",
      "Export available reports when you need to share or retain the information.",
    ],

    expectedResult:
      "You can use AkiliBiz records to better understand how the business has been operating during a selected period.",

    callout: {
      title: "Important",
      text:
        "AkiliBiz can help organise tax-related business information, but it does not replace professional accounting or tax advice. Confirm filing and compliance obligations using qualified professional or official guidance.",
      kind: "important",
    },

    relatedGuides: ["finance-overview", "sales-history", "inventory"],
  },

  // ---------------------------------------------------------------------------
  // MANAGE
  // ---------------------------------------------------------------------------

  {
    slug: "import-csv",
    section: "manage",
    group: "Data",
    navLabel: "Import CSV",
    title: "Import products and categories from CSV",
    summary:
      "Bring an existing product catalogue into AkiliBiz without entering every record manually.",
    purpose:
      "Reduce setup time for businesses that already maintain product information in spreadsheets or another system.",

    prerequisites: [
      "A CSV file containing the products you want to import.",
      "A backup copy of the original file.",
      "Clean and consistent product names and category values.",
    ],

    steps: [
      "Review the source spreadsheet before exporting it.",
      "Remove rows that should not become AkiliBiz products.",
      "Check for duplicate products.",
      "Ensure important columns such as product names and categories contain valid information.",
      "Save or export the file as CSV.",
      "Open the AkiliBiz import tool.",
      "Choose the CSV file.",
      "Review the import preview.",
      "Correct any validation problems reported by AkiliBiz.",
      "Confirm the import only after the preview looks correct.",
      "Review the resulting Products and Categories lists.",
    ],

    expectedResult:
      "Valid catalogue records are added to AkiliBiz and are ready for further setup such as stock entry.",

    troubleshooting: [
      {
        problem: "Some rows cannot be imported.",
        solution:
          "Review the validation message and correct the affected rows in the source file before trying again.",
      },
      {
        problem: "Duplicate products appear after importing.",
        solution:
          "Check whether the same products already existed in AkiliBiz or appeared more than once in the CSV.",
      },
    ],

    callout: {
      title: "Before you begin",
      text:
        "Keep the original spreadsheet or CSV unchanged until you have confirmed that the imported catalogue is correct.",
      kind: "before",
    },

    relatedGuides: ["products-and-categories", "opening-stock", "backups"],
  },

  {
    slug: "staff-roles",
    section: "manage",
    group: "Access",
    navLabel: "Staff access",
    title: "Manage staff roles and permissions",
    summary:
      "Give each staff member access appropriate to their responsibilities.",
    purpose:
      "Protect sensitive business functions while still allowing employees to complete their work.",

    prerequisites: [
      "Administrator or authorised management access.",
      "A clear understanding of each employee's responsibilities.",
    ],

    steps: [
      "Open Staff or access management.",
      "Create a separate staff account for each person who needs AkiliBiz.",
      "Enter the staff member's required information.",
      "Assign the role that most closely matches their responsibilities.",
      "Review the permissions provided by that role.",
      "Avoid granting administrative access unless it is genuinely required.",
      "Save the staff account.",
      "Review staff access when duties change.",
      "Disable or remove access promptly when someone should no longer use the business workspace.",
    ],

    expectedResult:
      "Staff can access the functions they need without receiving unnecessary permissions.",

    callout: {
      title: "Important",
      text:
        "Use the principle of least privilege: staff should receive the minimum access required to perform their responsibilities.",
      kind: "important",
    },

    relatedGuides: ["secure-your-account", "activity-history"],
  },

  {
    slug: "activity-history",
    section: "manage",
    group: "Access",
    navLabel: "Activity history",
    title: "Review staff and system activity",
    summary:
      "Use available activity records to understand important actions performed in AkiliBiz.",
    purpose:
      "Support accountability and help investigate unexpected changes to business records.",

    steps: [
      "Open the available activity or audit history.",
      "Choose the period you want to review.",
      "Look for the user, action, or business area relevant to your investigation.",
      "Compare the activity with the related sales, stock, customer, supplier, or administrative records.",
      "Discuss unexplained activity with the responsible staff member where necessary.",
    ],

    expectedResult:
      "You can use activity records as supporting information when reviewing important changes.",

    callout: {
      title: "Tip",
      text:
        "Activity history is most useful when employees have separate accounts rather than sharing login credentials.",
      kind: "tip",
    },

    relatedGuides: ["staff-roles", "secure-your-account"],
  },

  {
    slug: "language-and-region",
    section: "manage",
    group: "Preferences",
    navLabel: "Language",
    title: "Change language and regional preferences",
    summary:
      "Configure supported language and regional presentation settings.",
    purpose:
      "Make AkiliBiz easier for staff to use while keeping business information presented consistently.",

    steps: [
      "Open Settings.",
      "Open Language or regional preferences.",
      "Choose one of the available supported options.",
      "Save the setting.",
      "Review commonly used screens to confirm the new preference is applied.",
    ],

    expectedResult:
      "AkiliBiz uses the selected supported language or regional presentation preference.",

    relatedGuides: ["setup-workspace"],
  },

  {
    slug: "backups",
    section: "manage",
    group: "Safety",
    navLabel: "Backups",
    title: "Back up your business data",
    summary:
      "Create recoverable copies of the local AkiliBiz business database.",
    purpose:
      "Reduce the risk of losing important business records if the computer, storage device, or application data is damaged.",

    prerequisites: [
      "Access to AkiliBiz backup settings.",
      "A safe location where backup files can be retained.",
    ],

    steps: [
      "Open Settings.",
      "Open Backup and Recovery.",
      "Choose the option to create a backup.",
      "Allow AkiliBiz to complete and verify the backup.",
      "Store the resulting backup somewhere separate from the computer's normal application data.",
      "Keep more than one recent backup where practical.",
      "Create another backup before significant upgrades, imports, or administrative changes.",
    ],

    expectedResult:
      "You have a verified backup copy that can be retained separately from the working AkiliBiz data.",

    troubleshooting: [
      {
        problem: "The backup cannot be created.",
        solution:
          "Check that the destination has enough available storage and that your user account is allowed to write files there.",
      },
      {
        problem: "You only have one backup stored on the same computer.",
        solution:
          "Copy important backups to another trusted storage location so a single device failure does not affect both the working database and its backup.",
      },
    ],

    callout: {
      title: "Recommended routine",
      text:
        "Create backups regularly and after important periods of business activity. A weekly backup is a reasonable minimum for many small businesses, but businesses with frequent transactions may need them more often.",
      kind: "tip",
    },

    relatedGuides: ["data-safety", "getting-help"],
  },

  {
    slug: "data-safety",
    section: "manage",
    group: "Safety",
    navLabel: "Data safety",
    title: "Keep your AkiliBiz data safe",
    summary:
      "Protect the computer and files that contain your business information.",
    purpose:
      "Reduce avoidable data loss, unauthorised access, and operational disruption.",

    steps: [
      "Protect the computer with an operating-system password or PIN.",
      "Do not allow unknown users to use the business administrator account.",
      "Keep the operating system reasonably up to date.",
      "Avoid deleting AkiliBiz application files manually.",
      "Create regular backups.",
      "Keep important backups separate from the primary computer.",
      "Shut down the computer properly rather than repeatedly forcing power loss.",
      "Contact support before manually altering application data when troubleshooting serious issues.",
    ],

    expectedResult:
      "The business has basic operational protections around its locally stored AkiliBiz information.",

    callout: {
      title: "Important",
      text:
        "A backup stored only on the same device is vulnerable to the same theft, hardware failure, or storage damage as the original data.",
      kind: "important",
    },

    relatedGuides: ["backups", "getting-help"],
  },

  // ---------------------------------------------------------------------------
  // HELP
  // ---------------------------------------------------------------------------

  {
    slug: "troubleshooting",
    section: "help",
    group: "Support",
    navLabel: "Troubleshooting",
    title: "Troubleshoot common AkiliBiz problems",
    summary:
      "Use a safe sequence of checks before making major changes to your installation.",
    purpose:
      "Resolve simple problems quickly while avoiding actions that could unnecessarily affect business data.",

    steps: [
      "Read the message shown by AkiliBiz carefully.",
      "Confirm which page or action produced the problem.",
      "Check whether the same problem occurs when you repeat the action once.",
      "Review the relevant documentation guide.",
      "Confirm that required information has been entered correctly.",
      "Close and reopen AkiliBiz if the problem appears to be temporary.",
      "Avoid deleting application folders or database files while troubleshooting.",
      "Create a backup when possible before performing major corrective actions.",
      "If the problem continues, gather the information needed by support.",
    ],

    expectedResult:
      "You either resolve a simple workflow problem or have useful information ready for AkiliBiz support.",

    callout: {
      title: "Important",
      text:
        "Do not manually modify or delete AkiliBiz database files unless official support instructions specifically require it.",
      kind: "important",
    },

    relatedGuides: ["getting-help", "backups"],
  },

  {
    slug: "getting-help",
    section: "help",
    group: "Support",
    navLabel: "Get support",
    title: "Getting help with AkiliBiz",
    summary:
      "Collect useful information before contacting AkiliBiz support.",
    purpose:
      "Help support understand the problem quickly and reduce unnecessary back-and-forth.",

    steps: [
      "Identify the AkiliBiz feature you were using when the problem occurred.",
      "Write down what you were trying to do.",
      "Record the steps that led to the problem.",
      "Copy the exact error message when one is shown.",
      "Note whether the issue occurs every time or only occasionally.",
      "Include your operating system when the problem may be installation or device related.",
      "Take a screenshot when it helps explain what you are seeing, but avoid exposing passwords or other sensitive information.",
      "Contact AkiliBiz support using the official support channel.",
    ],

    expectedResult:
      "Support receives enough context to begin investigating the problem effectively.",

    callout: {
      title: "Protect sensitive information",
      text:
        "Never send your password, authentication secrets, or other private credentials when requesting support.",
      kind: "important",
    },

    relatedGuides: ["troubleshooting", "backups"],
  },

  {
    slug: "updates",
    section: "help",
    group: "Updates",
    navLabel: "Updates",
    title: "Keep AkiliBiz Desktop up to date",
    summary:
      "Use supported AkiliBiz releases to receive improvements, fixes, and new capabilities.",
    purpose:
      "Keep your installation compatible with the latest supported business workflows and reliability improvements.",

    steps: [
      "Check the official AkiliBiz website or application update information for available releases.",
      "Read important release information before updating.",
      "Create a backup before major application upgrades.",
      "Download updates only from official AkiliBiz distribution channels.",
      "Install the update.",
      "Open AkiliBiz after updating.",
      "Confirm that your business information and commonly used workflows are available.",
    ],

    expectedResult:
      "Your business is running a supported AkiliBiz Desktop release with existing records preserved.",

    callout: {
      title: "Before updating",
      text:
        "A recent backup gives you additional protection before major software changes.",
      kind: "before",
    },

    relatedGuides: ["backups", "getting-help"],
  },

  {
    slug: "offline-use",
    section: "help",
    group: "Understanding AkiliBiz",
    navLabel: "Offline use",
    title: "Understand offline-first operation",
    summary:
      "Learn what offline-first means for the current AkiliBiz Desktop application.",
    purpose:
      "Help businesses understand where their records are stored and why the primary computer matters.",

    steps: [
      "Use AkiliBiz Desktop normally for supported local business operations even when internet access is unreliable.",
      "Remember that the current Desktop workspace primarily operates using data stored locally for that business installation.",
      "Create regular backups to protect the local business database.",
      "Do not assume that records entered on separate computers are automatically synchronised.",
      "Watch official AkiliBiz updates for future multi-device and online services.",
    ],

    expectedResult:
      "You understand the difference between current local Desktop operation and future connected AkiliBiz services.",

    callout: {
      title: "Important",
      text:
        "Installing AkiliBiz independently on another computer does not currently mean both installations share the same live business records.",
      kind: "important",
    },

    relatedGuides: ["backups", "coming-next"],
  },

  {
    slug: "coming-next",
    section: "help",
    group: "Roadmap",
    navLabel: "What’s next",
    title: "What is coming next to AkiliBiz",
    summary:
      "Understand the wider AkiliBiz ecosystem and which capabilities are planned beyond Desktop.",
    purpose:
      "Help businesses understand the direction of the platform without confusing future products with functionality available today.",

    steps: [
      "Use AkiliBiz Desktop for currently supported business operations.",
      "Follow official AkiliBiz announcements for product releases.",
      "Expect the wider ecosystem to expand beyond the current Desktop application.",
      "Planned areas include AkiliBiz Business on the web, mobile business experiences, the AkiliBiz Marketplace, customer mobile experiences, connected payments, and multi-device synchronisation.",
      "Review release documentation before depending on a planned capability in your business workflow.",
    ],

    expectedResult:
      "You can distinguish between functionality available in AkiliBiz today and capabilities planned for future releases.",

    callout: {
      title: "Planned functionality",
      text:
        "Business Web, Marketplace, mobile applications, production payment integrations, and multi-device synchronisation should be treated as planned until AkiliBiz announces them as generally available.",
      kind: "important",
    },
  },
];

export const docsHome = {
  title: "Welcome to AkiliBiz",
  summary:
    "Learn how to set up AkiliBiz, prepare your business records, manage daily operations, protect your data, and get help when you need it.",

  introduction:
    "AkiliBiz is designed to help businesses bring sales, stock, customers, suppliers, finances, reporting, and day-to-day administration into one organised workspace.",

  gettingStarted: [
    {
      title: "Install AkiliBiz",
      text: "Install AkiliBiz Desktop on the computer your business will use regularly.",
      href: "/docs/install-akilibiz",
    },
    {
      title: "Set up your business",
      text: "Configure your business information and secure administrator access.",
      href: "/docs/setup-workspace",
    },
    {
      title: "Create your catalogue",
      text: "Add products and organise them into clear categories.",
      href: "/docs/products-and-categories",
    },
    {
      title: "Record opening stock",
      text: "Tell AkiliBiz what stock was already available before you started using the system.",
      href: "/docs/opening-stock",
    },
    {
      title: "Make your first sale",
      text: "Complete a test of your real sales workflow and verify the resulting records.",
      href: "/docs/first-sale",
    },
  ],
};

export function getGuide(slug: string) {
  return docsGuides.find((guide) => guide.slug === slug);
}

export function getGuidesBySection(section: DocsSectionId) {
  return docsGuides.filter((guide) => guide.section === section);
}

export function getGuideGroups(section: DocsSectionId) {
  return Object.entries(
    getGuidesBySection(section).reduce<Record<string, DocsGuide[]>>(
      (groups, guide) => {
        groups[guide.group] ??= [];
        groups[guide.group].push(guide);

        return groups;
      },
      {},
    ),
  );
}

export function getAdjacentGuides(slug?: string) {
  const all = [{ slug: "", title: "Welcome to AkiliBiz" }, ...docsGuides];

  const index = all.findIndex((guide) => guide.slug === (slug ?? ""));

  return {
    previous: all[index - 1],
    next: all[index + 1],
  };
}