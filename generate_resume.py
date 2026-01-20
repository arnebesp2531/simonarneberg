from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.colors import HexColor

# Create PDF
doc = SimpleDocTemplate(
    "Simon_Arneberg_Resume.pdf",
    pagesize=letter,
    rightMargin=0.75*inch,
    leftMargin=0.75*inch,
    topMargin=0.75*inch,
    bottomMargin=0.75*inch
)

# Custom colors matching Oregon Coast theme
ocean = HexColor('#6b8fa3')
storm = HexColor('#3d4e5a')
ocean_deep = HexColor('#4a6b7c')

# Styles
styles = getSampleStyleSheet()

# Header style
header_style = ParagraphStyle(
    'CustomHeader',
    parent=styles['Heading1'],
    fontSize=24,
    textColor=storm,
    spaceAfter=6,
    alignment=TA_CENTER,
    fontName='Helvetica-Bold'
)

# Contact info style
contact_style = ParagraphStyle(
    'ContactInfo',
    parent=styles['Normal'],
    fontSize=10,
    textColor=ocean_deep,
    alignment=TA_CENTER,
    spaceAfter=20
)

# Section header style
section_style = ParagraphStyle(
    'SectionHeader',
    parent=styles['Heading2'],
    fontSize=14,
    textColor=ocean,
    spaceAfter=8,
    spaceBefore=12,
    fontName='Helvetica-Bold'
)

# Job title style
job_title_style = ParagraphStyle(
    'JobTitle',
    parent=styles['Normal'],
    fontSize=12,
    textColor=storm,
    spaceAfter=2,
    fontName='Helvetica-Bold'
)

# Job meta style (company, dates)
job_meta_style = ParagraphStyle(
    'JobMeta',
    parent=styles['Normal'],
    fontSize=10,
    textColor=ocean_deep,
    spaceAfter=6,
    fontName='Helvetica-Oblique'
)

# Body text style
body_style = ParagraphStyle(
    'CustomBody',
    parent=styles['Normal'],
    fontSize=10,
    textColor=storm,
    spaceAfter=4,
    leading=14
)

# Skill badge style
skill_style = ParagraphStyle(
    'SkillBadge',
    parent=styles['Normal'],
    fontSize=10,
    textColor=storm,
    spaceAfter=8
)

# Build content
story = []

# Header
story.append(Paragraph("SIMON ARNEBERG", header_style))
story.append(Paragraph(
    "Portland, Oregon | simonarneberg.com | linkedin.com/in/simon-arneberg-007a651b9",
    contact_style
))

# Professional Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", section_style))
story.append(HRFlowable(width="100%", thickness=2, color=ocean, spaceAfter=10))
story.append(Paragraph(
    "Data engineer with experience building analytics systems, data pipelines, and business intelligence solutions. "
    "Background in manufacturing analytics, operational data quality, and cross-functional collaboration. "
    "Combines technical expertise with creative problem-solving.",
    body_style
))
story.append(Spacer(1, 0.15*inch))

# Experience
story.append(Paragraph("EXPERIENCE", section_style))
story.append(HRFlowable(width="100%", thickness=2, color=ocean, spaceAfter=10))

# InterWorks
story.append(Paragraph("Data Engineer", job_title_style))
story.append(Paragraph("InterWorks | Portland, Oregon | Oct 2025 - Present (4 months)", job_meta_style))
story.append(Paragraph("• Build data pipelines and analytics systems at a people-focused tech consultancy", body_style))
story.append(Paragraph("• Design and implement solutions that help organizations transform data into actionable insights", body_style))
story.append(Paragraph("• Work with cross-functional teams to deliver data engineering projects", body_style))
story.append(Spacer(1, 0.1*inch))

# HPE - Data Analyst
story.append(Paragraph("Data Analyst, Business Systems Engineering", job_title_style))
story.append(Paragraph("Hewlett Packard Enterprise | Chippewa Falls, Wisconsin | Sep 2022 - Jun 2025 (2 yrs 10 mos)", job_meta_style))
story.append(Paragraph("• Analyzed large datasets from the HPE Cray supercomputer manufacturing floor", body_style))
story.append(Paragraph("• Created interactive dashboards with PowerBI to measure & track key quality objectives across teams", body_style))
story.append(Paragraph("• Coordinated biweekly quality meetings with engineers and managers to discuss product manufacturing yields and defect rates", body_style))
story.append(Paragraph("• Wrote SQL queries daily to manipulate production data for the Systems Engineering group", body_style))
story.append(Paragraph("• Built a SAP/Python script to extract and validate upcoming production orders, enabling proactive correction of $450M worth of Sales Orders over a 12-month period", body_style))
story.append(Paragraph("• Resolved 400+ systems engineering tickets for manufacturing/ERP system issues, troubleshooting and communicating solutions to varied audiences", body_style))
story.append(Paragraph("• Performed root-cause analysis using Python, SQL, and Excel to discover persistent manufacturing errors", body_style))
story.append(Spacer(1, 0.1*inch))

# HPE - Data Scientist Intern
story.append(Paragraph("Data Scientist Intern", job_title_style))
story.append(Paragraph("Hewlett Packard Enterprise | Chippewa Falls, Wisconsin | Jun 2022 - Sep 2022 (4 mos)", job_meta_style))
story.append(Paragraph("• Intern Project: Created an internal Manufacturing Metrics Dashboard with SQL and Python", body_style))
story.append(Paragraph("• Performed Pareto analysis of production line errors", body_style))
story.append(Paragraph("• Wrote Python scripts to automate data parsing to identify Material Master setup errors in SAP", body_style))
story.append(Spacer(1, 0.1*inch))

# PetHonesty - Combined Internships
story.append(Paragraph("Operations Intern (Two Separate Internships)", job_title_style))
story.append(Paragraph("PetHonesty | Remote (Austin, TX) | Jun 2021 - Aug 2021 & May 2020 - Aug 2020 (7 mos total)", job_meta_style))
story.append(Paragraph("• Constructed multiple trackers for key features across 40+ products", body_style))
story.append(Paragraph("• Created spreadsheet to quantify existing qualitative data from customer interviews", body_style))
story.append(Paragraph("• Collaborated closely with dynamic teams of marketers, graphic designers, and decision-makers", body_style))
story.append(Paragraph("• Drove 1000+ organic reviews for 10 key products on Chewy.com", body_style))
story.append(Paragraph("• Built and maintained 15+ automated customer messaging flows through ManyChat software", body_style))
story.append(Paragraph("• Coordinated a dashboard to track marketing funnels and track key advertising spend", body_style))
story.append(Paragraph("• Analyzed large datasets to drive decision-making for future product release and marketing", body_style))
story.append(Spacer(1, 0.1*inch))

# UW-Eau Claire - Resident Assistant
story.append(Paragraph("Resident Assistant", job_title_style))
story.append(Paragraph("University of Wisconsin-Eau Claire Housing & Residence Life | Aug 2020 - May 2021 (10 mos)", job_meta_style))
story.append(Paragraph("• Solely responsible for coordinating bi-weekly events for 13 floor residents", body_style))
story.append(Paragraph("• Ensured building security by performing building rounds 3-4 times per night, 5 nights per month", body_style))
story.append(Paragraph("• Worked the front desk of the residence hall 3-6 hours per week", body_style))
story.append(Paragraph("• Answered duty phone and addressed needs of residents 24/7 when on-call", body_style))
story.append(Paragraph("• Communicated and upheld university and COVID-19 policies daily for residence hall", body_style))
story.append(Paragraph("• Assisted incoming students with campus transition and resources", body_style))
story.append(Spacer(1, 0.15*inch))

# Education
story.append(Paragraph("EDUCATION", section_style))
story.append(HRFlowable(width="100%", thickness=2, color=ocean, spaceAfter=10))
story.append(Paragraph("Bachelor of Science in Computer Science, Minor in Mathematics", job_title_style))
story.append(Paragraph("University of Wisconsin-Eau Claire | Magna Cum Laude", job_meta_style))
story.append(Spacer(1, 0.15*inch))

# Skills
story.append(Paragraph("TECHNICAL SKILLS", section_style))
story.append(HRFlowable(width="100%", thickness=2, color=ocean, spaceAfter=10))
story.append(Paragraph(
    "<b>Languages & Tools:</b> Python, SQL, Microsoft Power BI, Microsoft Excel, SAP",
    skill_style
))
story.append(Paragraph(
    "<b>Specializations:</b> Data Engineering, Data Pipelines, Analytics Systems, Business Intelligence, Data Visualization, ETL Processes",
    skill_style
))
story.append(Paragraph(
    "<b>Additional:</b> Music Production (33 songs across 6 EPs as Simon Paul Arneberg)",
    skill_style
))

# Build PDF
doc.build(story)
print("Resume PDF created successfully: Simon_Arneberg_Resume.pdf")
