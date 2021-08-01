from enum import Enum

class UserRoles(Enum):
    admin = "admin"
    sales = "sales"
    operations = "operations"
    agent = "agent"
    accounts = "accounts"

    @classmethod
    def choices(cls):
        return tuple((role.name,role.value) for role in UserRoles)