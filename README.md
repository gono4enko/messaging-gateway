# messaging-gateway

Webhook gateway: Instagram + WhatsApp → Bot Brain → reply via Meta Graph API.
Deployed on k8s cluster e842d9 (Beget CKE).

## Deploy

```bash
export KUBECONFIG=~/Downloads/kubeconfig_8fc3d4ac-a016-4c49-9854-14abd0acc43e.yaml

# Create real secret (never commit values)
kubectl create secret generic mg-secrets -n messaging-gateway \
  --from-literal=DATABASE_URL='postgresql://...' \
  --from-literal=IG_ACCESS_TOKEN='...' \
  --from-literal=IG_APP_SECRET='...' \
  --from-literal=IG_VERIFY_TOKEN='...' \
  --from-literal=BOT_BRAIN_SECRET='...'

# Deploy
kubectl apply -k k8s/base/
kubectl rollout status deploy/messaging-gateway -n messaging-gateway

# Verify
kubectl port-forward svc/messaging-gateway -n messaging-gateway 8086:8086
curl localhost:8086/health
```

## Webhook Meta verification

```
curl -s "https://gateway.pergolarussia.ru/webhooks/instagram?hub.mode=subscribe&hub.verify_token=<TOKEN>&hub.challenge=12345"
# → 12345
```
