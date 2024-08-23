details = {"name" : "Subha", "age" : 24, "from" : "Odisha"}
print(details.keys())
print(details.items())
# print(details.email())
print(details.get("email", "Not Found"))
details ['Email'] = "Subha@123"
print(details)
print(details.pop("age"))
print(details)

for i in details:
    print(i)
for i in details.items():
    print(i)
    