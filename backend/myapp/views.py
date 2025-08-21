from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
import json
from .models import ShortURL
# Create your views here.

def say_hello(request):
    # return HttpResponse("hii harshit")
    data = {
        "name":"harshit",
    }
    return JsonResponse(data)

# Connect to Supabase via connection pooling
# DATABASE_URL="postgresql://postgres.gjgmshycevqjuefvkmgj:[YOUR-PASSWORD]@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# # Direct connection to the database. Used for migrations
# DIRECT_URL="postgresql://postgres.gjgmshycevqjuefvkmgj:[YOUR-PASSWORD]@aws-1-ap-south-1.pooler.supabase.com:5432/postgres"

@csrf_exempt  # disable CSRF for testing (not for production)
def create(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body.decode("utf-8"))
            main_url = body.get("url") 

            if not main_url:
                return JsonResponse({"error": "URL is required"}, status=400)

            if not main_url.startswith("http://") and not main_url.startswith("https://"):
                main_url = "https://" + main_url

            short_url = ShortURL.objects.create(main_url=main_url)

            return JsonResponse({
                "main_url": short_url.main_url,
                "short_key": short_url.short_key,
            })

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"message": "Send a POST request with a 'url' field"})



def get_data(request, key):
    try:
        short_url = get_object_or_404(ShortURL, short_key=key)

        UrlData = {
            "key": short_url.short_key,
            "main_url": short_url.main_url,
            "created_at": short_url.created_at.strftime("%Y-%m-%d %H:%M:%S"),
        }
        return JsonResponse(UrlData)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)