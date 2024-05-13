
// Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and SSN. Only the name property should be accessible, and it should be called through a public function. The SSN property should not be accessible at all. Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.

//Function PII has two parameters name & SSN, that creates an object wrapping the PII.
function PII(name, SSN) {
//the privateName & privateSSN are only accessible within the scope of the PII, creating a closure.
       const privateName = name;
       const privateSSN = SSN;
    
//getName() & getSSN function returns the value of the variables & provides controlled access to the patient's SSN.   
     function getName() {
         return privateName;
      }
    
      function getSSN() {
         return privateSSN;
       }
    
//The return statement retruns an object with two properties 'getName' & 'getSSN' and serves as the public function through which the wrapped PII can be accessed. 
     return {
        getName,
         getSSN,
     };
    }

//'patient2' is a new object taht invokes the 'PII' function with the name Jemima & her SSN. 
    
     const patient2 = PII("Jemima", "987-65-4321");
    
     console.log(patient2.name); //Output: Undefined
     console.log(patient2.SSN); //Output: Undefined
     console.log(patient2.getName()); //Output: Jemima
     console.log(patient2.getSSN()); //Output: 987-65-4321
    