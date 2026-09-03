# 🔐 EntroPy Password Generator - Web Version

![EntroPy Password Generator - A secure and customizable password generator](https://drive.google.com/uc?export=download&id=19T8p_jzaaWGx9RS0sQlW7p6vG-9Hk4K0)

---

[![MIT License](https://img.shields.io/badge/License-MIT-FFC107?style=flat&logo=mit&logoColor=white)](https://github.com/gerivanc/entropy-password-generator/blob/main/LICENSE.md)
[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-2088FF?style=flat&logo=github&logoColor=white)](https://gerivanc.github.io/entropy-password-web/web/readme.html)
[![Made with Python](https://img.shields.io/badge/Made%20with-Python-3572A5?style=flat&logo=python&logoColor=white)](https://python.org)
[![Entropy Compliant](https://img.shields.io/badge/Entropy%20Compliant-Proton%20%26%20NIST-239120?style=flat&logo=security&logoColor=white)](https://proton.me/blog/what-is-password-entropy)

</div>

---

#
This EntroPy Password Generator project - Web Version, derives from the original project ['EntroPy Password Generator'](https://github.com/gerivanc/entropy-password-generator/), is a secure and customizable password generator developed in Python, enabling users to generate strong passwords. It creates robust passwords with configurable character sets and calculates their entropy to evaluate strength. The project provides 20+ modes for secure password generation, ranging from 15 to 128 characters, with entropies between 97.62 bits and 833.00 bits, exceeding the Proton© recommended minimum of 75 bits and the cryptographic strength best practices outlined in NIST SP 800-63B and NIST SP 800-132.

---

## 🌐 Interactive Web Version

Experience the EntroPy Password Generator directly in your browser! The web version offers all the functionality of the Python script in an intuitive and responsive interface.

### 🚀 Access the Web Version

<div align="center">
  
[**🌍 Try It Now on GitHub Pages**](https://entropy.gerivan.me/entropyweb.html)

</div>

### 🔧 Interactive Demo

<div align="center">

[**📚 Interactive Readme**](https://entropy.gerivan.me)

</div>

---

## ✨ Web Version Features

### 🎨 Three Block Interface

#### **🧩 Block I (Modes 1-10)**
- Fixed length of 24 characters
- Includes ambiguous characters for maximum entropy
- 10 predefined modes with different character combinations

#### **🌀 Block II (Modes 11-20)**
- Various lengths (15-128 characters)
- Excludes ambiguous characters for better readability
- Modes optimized for different use cases

#### **🎯 Block III (Custom Mode)**
- Customizable length (15-128 characters)
- Full control over character types
- Option to include/exclude ambiguous characters

### 🔒 Security Features

- **Real-time Entropy Calculation**: View password strength in bits
- **Visual Strength Indicator**: Color bar showing security level
- **Cryptographic Generation**: Secure algorithm based on Python's `secrets`
- **Security Warnings**: Alerts when entropy falls below 75 bits

### 📱 Responsive Interface

- **Modern Design**: Clean and professional interface
- **Mobile-Friendly**: Works perfectly on mobile devices
- **Visual Feedback**: Smooth animations and transitions
- **Accessibility**: User experience focused design

---

## 🛠️ How to Use the Web Version

### 1. **Select the Block**
- Choose between **Blocks I/II** (predefined modes) or **Block III** (custom)

### 2. **Configure Options**
- **Block III**: Adjust length and character types
- **Blocks I/II**: Select one of the 20 predefined modes

### 3. **Generate and Copy**
- Click "Generate Password"
- Use the "Copy" button to save the password
- Check password entropy and strength

### 4. **Implement Securely**
- Paste the password into your password manager
- **Never** memorize complex passwords
- Use a trusted manager like Bitwarden

---

## 📊 Example Output
Generated Password: ~e5gV*GyX@4YwGn&AFN?{3>,2gt{zNzCa%~:Uz!G
Length: 40 characters
Entropy: 253.59 bits
Mode: Block III (Custom)


**Security Classification:**
- 🔴 **Weak**: < 75 bits
- 🟡 **Medium**: 75-100 bits  
- 🟢 **Strong**: 100-150 bits
- 🔵 **Very Strong**: 150-200 bits
- 🟣 **Extremely Strong**: > 200 bits

---

## 🗂️ Web Project Structure

```
entropy-password-web/
├── .github/
│   └── ISSUE_TEMPLATE
│       └── config.yml
│   └── workflows/
│       └── static.yml
│
├── docs/
│	├── .nojekyll
│	├── CNAME
│	├── _config.yml
│	├── apple-touch-icon-256x247.png
│	├── entropyweb.html
│	├── favicon-256x256.png
│	├── favicon-784x757.png
│	├── favicon.ico
│	├── favicon.svg
│	├── favicon2-944x910.png
│	├── favicon2.ico
│	├── index.html
│	├── site.webmanifest
│	├── web-app-manifest-871x874.png
│	└── web-app-manifest-960x410.png
│
├── LICENSE
├── README.md
└──  SECURITY.md
```

---

## 🔗 Important Links

- **🌐 Live Demo**: [Password Generator](https://entropy.gerivan.me/entropyweb.html)
- **📖 Interactive Docs**: [Complete Documentation](https://entropy.gerivan.me)

- **📁 Source Code**: [Web Repository](https://github.com/gerivanc/entropy-password-web)
- **🐍 Python Original Project**: [Main Repository](https://github.com/gerivanc/entropy-password-generator)

---

### 🌐 Web Pages Available

- **🎯 Password Generator**: [Interactive Tool](https://entropy.gerivan.me/entropyweb.html)

- **📖 Interactive Documentation**: [Complete Guide](https://entropy.gerivan.me/entropyweb.html)
---

## 🎯 Recommended Use Cases

### **For Daily Use:**
- `Mode 8` (151 bits) - High-security websites
- `Mode 15` (152 bits) - Corporate email
- `Mode 11` (95 bits) - Social media

### **For Maximum Security:**
- `Mode 19` (475 bits) - Password manager master key
- `Mode 20` (811 bits) - Encryption and wallets
- `Block III Custom` - Specific use cases

---

## ⚠️ Security Warnings

1. **⚠️ DO NOT memorize passwords generated by this tool**
2. **✅ USE a trusted password manager**
3. **🔒 The only password to memorize is your vault password**
4. **📱 Enable two-factor authentication whenever possible**

---

## 🆚 Comparison: Web vs Python

| Feature | Web Version | Python Version |
|---------|-------------|----------------|
| **Interface** | 🎨 Graphical & Intuitive | ⌨️ Command Line |
| **Accessibility** | 🌐 Browser | 🐍 Python 3.8+ |
| **Configuration** | 🖱️ Clicks | 🏃‍♂️ Arguments |
| **Results** | 📊 Visual | 📝 Text |
| **Portability** | 📱 Multi-device | 💻 Local |

---

## 🔄 Integration with Python Project

The web version maintains **100% compatibility** with the original Python project:

- **Same generation** algorithms
- **Identical entropy** calculation  
- **Full compatibility** with 20 predefined modes
- **Same security** standards Proton© and NIST

---

<div align="center">

## 📧 Support and Contributions

Found an issue? Have a suggestion?

[**🐛 Report Issue**](https://github.com/gerivanc/entropy-password-generator/issues) • 
[**💡 Bug Report**](https://github.com/gerivanc/entropy-password-generator/blob/main/.github/ISSUE_TEMPLATE/bug_report.md) • 
[**🤝 Contribute**](https://github.com/gerivanc/entropy-password-generator/blob/main/CONTRIBUTING.md) •

---

####
EntroPy Password Generator - Web Version © 2025 - 2026 - Gerivan Costa dos Santos
