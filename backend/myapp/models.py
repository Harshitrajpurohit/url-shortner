from django.db import models
import random, string

# Create your models here.
def generate_short_key():
    from .models import ShortURL
    while True:
        key = ''.join(random.choices(string.ascii_letters + string.digits, k=6))
        if not ShortURL.objects.filter(short_key=key).exists():
            return key


class ShortURL(models.Model):
    # unique ID is created automatically as "id" (primary key)
    main_url = models.URLField()                     # original URL
    short_key = models.CharField(max_length=10, unique=True, default=generate_short_key)  # short code
    created_at = models.DateTimeField(auto_now_add=True)      # timestamp

    def __str__(self):
        return f"{self.short_key} → {self.main_url}"
