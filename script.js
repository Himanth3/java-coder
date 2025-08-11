// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Course Modal Functionality
const courseModal = document.getElementById('courseModal');
const modalContent = document.getElementById('modalContent');

// Course data
const courseData = {
    basics: {
        title: "🔰 Java Basics Course",
        description: "Master the fundamentals of Java programming language",
        content: `
            <h3>📚 Course Overview</h3>
            <p>Learn Java fundamentals: variables, data types, operators, control structures, and arrays.</p>
            
            <h4>🎯 What You'll Learn:</h4>
            <ul>
                <li>📝 Variables and Data Types</li>
                <li>🔢 Operators and Expressions</li>
                <li>🎯 Control Structures (if-else, loops)</li>
                <li>📦 Arrays and Collections</li>
                <li>📚 Methods and Functions</li>
            </ul>
            
            <h4>💻 Sample Code:</h4>
            <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World! 🌍");
        
        int number = 42;
        String message = "Learning Java is fun! 🚀";
        
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}</code></pre>
        `
    },
    oop: {
        title: "🏗️ Object-Oriented Programming",
        description: "Master classes, objects, inheritance, polymorphism, and encapsulation",
        content: `
            <h3>📚 Course Overview</h3>
            <p>Learn OOP concepts: classes, objects, inheritance, polymorphism, and encapsulation.</p>
            
            <h4>🎯 What You'll Learn:</h4>
            <ul>
                <li>🏗️ Classes and Objects</li>
                <li>🔗 Inheritance and Polymorphism</li>
                <li>🔒 Encapsulation and Abstraction</li>
                <li>📋 Interfaces and Abstract Classes</li>
                <li>🎭 Method Overriding and Overloading</li>
            </ul>
            
            <h4>💻 Sample Code:</h4>
            <pre><code>public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some animal sound 🐾");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof! 🐕");
    }
}</code></pre>
        `
    },
    collections: {
        title: "📦 Java Collections Framework",
        description: "Explore ArrayList, LinkedList, HashMap, HashSet, and more data structures",
        content: `
            <h3>📚 Course Overview</h3>
            <p>Master Java Collections: Lists, Sets, Maps, and Queues for efficient data management.</p>
            
            <h4>🎯 What You'll Learn:</h4>
            <ul>
                <li>📋 ArrayList and LinkedList</li>
                <li>🗺️ HashMap and TreeMap</li>
                <li>✨ HashSet and TreeSet</li>
                <li>📚 Queue and PriorityQueue</li>
                <li>🔄 Iterators and Streams</li>
            </ul>
            
            <h4>💻 Sample Code:</h4>
            <pre><code>import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        // ArrayList
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("🍎 Apple");
        fruits.add("🍌 Banana");
        fruits.add("🍊 Orange");
        
        // HashMap
        HashMap<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        
        System.out.println("Fruits: " + fruits);
        System.out.println("Scores: " + scores);
    }
}</code></pre>
        `
    }
};

function openCourse(courseId) {
    const course = courseData[courseId];
    if (!course) return;
    
    modalContent.innerHTML = `
        <div class="course-modal-header">
            <h2>${course.title}</h2>
            <p>${course.description}</p>
        </div>
        <div class="course-content">
            ${course.content}
        </div>
        <div class="course-actions">
            <button class="btn btn-primary" onclick="startCourse('${courseId}')">
                🚀 Start Learning
            </button>
            <button class="btn btn-secondary" onclick="closeModal()">
                ❌ Close
            </button>
        </div>
    `;
    
    courseModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    courseModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function startCourse(courseId) {
    alert(`🎉 Welcome to ${courseData[courseId].title}! Let's start learning! 🚀`);
}

// Code Execution Simulation
function runCode() {
    const codeInput = document.getElementById('codeInput').value;
    const outputDisplay = document.getElementById('outputDisplay');
    
    if (!codeInput.trim()) {
        outputDisplay.innerHTML = '<p class="error">❌ Please enter some code first!</p>';
        return;
    }
    
    outputDisplay.innerHTML = '<p class="loading">🔄 Compiling and running your Java code...</p>';
    
    setTimeout(() => {
        let output = '';
        
        if (codeInput.includes('System.out.println')) {
            const matches = codeInput.match(/System\.out\.println\("([^"]*)"\)/g);
            if (matches) {
                matches.forEach(match => {
                    const text = match.match(/System\.out\.println\("([^"]*)"\)/)[1];
                    output += `<p class="output-line">${text}</p>`;
                });
            }
        }
        
        if (codeInput.includes('public class') && codeInput.includes('main')) {
            output += '<p class="output-line success">✅ Code compiled successfully!</p>';
            output += '<p class="output-line">🚀 Program executed without errors.</p>';
        } else {
            output += '<p class="output-line info">ℹ️ Code structure analyzed!</p>';
        }
        
        outputDisplay.innerHTML = output || '<p class="output-line info">ℹ️ Code analyzed successfully!</p>';
    }, 1500);
}

function clearOutput() {
    document.getElementById('outputDisplay').innerHTML = '<p class="output-placeholder">✨ Your code output will appear here!</p>';
}

// Contact Form Submission
function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const submitBtn = event.target.querySelector('button[type="submit"]');
    
    submitBtn.textContent = '📤 Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = '✅ Message Sent!';
        submitBtn.style.background = '#27ae60';
        
        event.target.reset();
        
        setTimeout(() => {
            submitBtn.textContent = '📤 Send Message';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
        
        alert(`🎉 Thank you ${name}! Your message has been sent successfully! 📧`);
    }, 2000);
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === courseModal) {
        closeModal();
    }
});

// Add CSS for modal content
const style = document.createElement('style');
style.textContent = `
    .course-modal-header {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #e9ecef;
    }
    
    .course-modal-header h2 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }
    
    .course-modal-header p {
        color: #7f8c8d;
        font-size: 1.1rem;
    }
    
    .course-content {
        margin-bottom: 2rem;
    }
    
    .course-content h3, .course-content h4 {
        color: #2c3e50;
        margin: 1rem 0 0.5rem 0;
    }
    
    .course-content p, .course-content li {
        color: #7f8c8d;
        line-height: 1.6;
        margin-bottom: 0.5rem;
    }
    
    .course-content ul {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .course-content pre {
        background: #2c3e50;
        color: #ecf0f1;
        padding: 1rem;
        border-radius: 5px;
        overflow-x: auto;
        margin: 1rem 0;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
    }
    
    .course-actions {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 2px solid #e9ecef;
    }
    
    .course-actions .btn {
        margin: 0 0.5rem;
    }
    
    .output-line {
        margin: 0.5rem 0;
        padding: 0.5rem;
        background: #34495e;
        border-radius: 5px;
        border-left: 3px solid #3498db;
    }
    
    .output-line.success {
        border-left-color: #27ae60;
        color: #27ae60;
    }
    
    .output-line.info {
        border-left-color: #3498db;
        color: #3498db;
    }
    
    .output-line.error {
        border-left-color: #e74c3c;
        color: #e74c3c;
    }
    
    .loading {
        color: #f39c12;
        font-style: italic;
    }
`;
document.head.appendChild(style);
