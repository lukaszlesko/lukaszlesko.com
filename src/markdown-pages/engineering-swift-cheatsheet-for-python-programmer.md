---
path: /publications/engineering/swift-cheatsheet-for-python-programmer
title: Swift cheatsheet for Python programmer
description: Key differences between Swift and Python syntax
contentType: publication
created: 2020-07-12
---

```
# you need to declare variables and constants:
var variable = "variable_value"
let constant = "abc"
constant = "xyz"  # can't do that
variable = "it's possible of course!"
```

```
# you need to declare types:
var variable: Int = 1

"""
Most useful types:
- Int
- String
- Float
- Double
"""
```

```
# you need to declare type for array and dictionary (ugly syntax)
let someDictionary = [String: Float]()
let someArray = [String]()
someArray.append("abc")
someDictionary["key"] = 123
```

```
# loops are (almost) OK!
for item in items {
    # do stuff
}

for (key, value) in dictionary {
    # do stuff
}

for i in 0..<4 { // range(4)

}

for i in 0...4 { // range(5) sigh!

}
```

```
# conditionals are (almost) OK!
if value > 10 {
    # do stuff
}
# but...
if value { 
   # it's an error, there's no implicit cast to boolean
}
```

```
// Optional values
var iCanBeNone: String? = "uuu"
iCanBeNone = nil
print(iCanBeNone)
// or more magic!
var iCouldBePopulated: String? = nil;
let butYourNot: String = "ThatsWhyImHere :-)"
print(iCouldBePopulated ?? butYourNot)
```

```
// switch exists :(
// but I don't want to show any examples :see-no-evil:
```

```
// instead of __init__(), there's init(), subclassing is also a little bit different
class BaseAPI {
    var someParam: String;
    
    init(someParam: String) {
        self.someParam = someParam
    }

    func someMethod() {
        print(someParam) // without self. (!!!)
    }
}

var base_api: BaseAPI = BaseAPI(someParam: "I'm BaseAPI")
base_api.someMethod()

// subclassing & some magic inside
class InternalAPI: BaseAPI {
    init() {
        super.init(someParam: "I'm InternalAPI")
    }

    // property setter and getter :see-no-evil:
    var someEvilStuff: String {
        get {
             return String(repeating: someParam, count: 3)
        }
        set {
            someParam = newValue
        }
    }
}

var internal_api: InternalAPI = InternalAPI()
internal_api.someMethod()
print(internal_api.someEvilStuff)
internal_api.someEvilStuff = "huh"
print(internal_api.someEvilStuff)
```

