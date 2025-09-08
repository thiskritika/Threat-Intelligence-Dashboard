export interface IOC {
  value: string;
  type: "ip" | "subnet" | "url";
  source: "blocklist.de" | "spamhaus" | "digitalside";
  timestamp: string;
}
