# Polymorphism & Composition Homework - Quiz

# Polymorphism

1. What does the ___word___ 'polymorphism' mean?
It  means that an object can take on many forms. Poly(many) morphism (change)

2. What does it mean when we apply polymorphism to OO design? Give a simple Java example.
An object can take on many types, itself and inherited class or something that it implements.
public interface Vegetarian{}
public class Animal{}
public class Deer extends Animal implements Vegetarian{}
Deer d = new Deer();
Animal a = d;
Vegetarian v = d;
Object o = d;

3. What can we use to implement polymorphism in Java?
inheritance, abstract and interfaces

4. How many 'forms' can an object take when using polymorphism?
As many as it wants.

5. Give an example of when you could use polymorphism.



# Composition

6. What do we mean by 'composition' in reference to object-oriented programming?
Using a standard template with which to create child classes.

7. When would you use composition? Provide a simple example in Java.


8. What is/are the advantage(s) of using composition?
it is more adaptable and allows for the code to be updated with less refactoring

9. When an object is destroyed, what happens to all the objects it is composed of?
