export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      vessels: {
        Row: {
          ais: string | null
          autopilot: string | null
          auxmaker: string | null
          auxnum: string | null
          beam: string | null
          bnwas: string | null
          boiler: string | null
          builder: string | null
          built: string | null
          bwm: string | null
          bwts: string | null
          callsign: string | null
          certupload: string | null
          class: string | null
          classcert: string | null
          co2: string | null
          console: string | null
          crane: string | null
          created_at: string
          crewmatrix: string | null
          delivery: string | null
          doc: string | null
          doccert: string | null
          draft: string | null
          dwt: string | null
          ecdis: string | null
          enginemodel: string | null
          enginepower: string | null
          familiar: string | null
          flag: string | null
          gmdss: string | null
          gt: string | null
          gyro: string | null
          hatch: string | null
          hullno: string | null
          id: string
          imo: string
          incinerator: string | null
          insurer: string | null
          iopp: string | null
          ism: string | null
          issc: string | null
          keeldate: string | null
          lastchange: string | null
          lastdock: string | null
          loa: string | null
          magcompass: string | null
          mainengine: string | null
          majorrepair: string | null
          manuals: string | null
          mgr: string | null
          mlc: string | null
          name: string
          nextcrew: string | null
          nextdock: string | null
          nt: string | null
          operator: string | null
          owner: string | null
          ownerinstruct: string | null
          ows: string | null
          pi: string | null
          plans: string | null
          pmslink: string | null
          propeller: string | null
          pump: string | null
          radar: string | null
          rotation: string | null
          safeequip: string | null
          safemanning: string | null
          scrubber: string | null
          sewage: string | null
          shaftgen: string | null
          smc: string | null
          tsuper: string | null
          type: string | null
          updated_at: string
          vdr: string | null
        }
        Insert: {
          ais?: string | null
          autopilot?: string | null
          auxmaker?: string | null
          auxnum?: string | null
          beam?: string | null
          bnwas?: string | null
          boiler?: string | null
          builder?: string | null
          built?: string | null
          bwm?: string | null
          bwts?: string | null
          callsign?: string | null
          certupload?: string | null
          class?: string | null
          classcert?: string | null
          co2?: string | null
          console?: string | null
          crane?: string | null
          created_at?: string
          crewmatrix?: string | null
          delivery?: string | null
          doc?: string | null
          doccert?: string | null
          draft?: string | null
          dwt?: string | null
          ecdis?: string | null
          enginemodel?: string | null
          enginepower?: string | null
          familiar?: string | null
          flag?: string | null
          gmdss?: string | null
          gt?: string | null
          gyro?: string | null
          hatch?: string | null
          hullno?: string | null
          id?: string
          imo: string
          incinerator?: string | null
          insurer?: string | null
          iopp?: string | null
          ism?: string | null
          issc?: string | null
          keeldate?: string | null
          lastchange?: string | null
          lastdock?: string | null
          loa?: string | null
          magcompass?: string | null
          mainengine?: string | null
          majorrepair?: string | null
          manuals?: string | null
          mgr?: string | null
          mlc?: string | null
          name: string
          nextcrew?: string | null
          nextdock?: string | null
          nt?: string | null
          operator?: string | null
          owner?: string | null
          ownerinstruct?: string | null
          ows?: string | null
          pi?: string | null
          plans?: string | null
          pmslink?: string | null
          propeller?: string | null
          pump?: string | null
          radar?: string | null
          rotation?: string | null
          safeequip?: string | null
          safemanning?: string | null
          scrubber?: string | null
          sewage?: string | null
          shaftgen?: string | null
          smc?: string | null
          tsuper?: string | null
          type?: string | null
          updated_at?: string
          vdr?: string | null
        }
        Update: {
          ais?: string | null
          autopilot?: string | null
          auxmaker?: string | null
          auxnum?: string | null
          beam?: string | null
          bnwas?: string | null
          boiler?: string | null
          builder?: string | null
          built?: string | null
          bwm?: string | null
          bwts?: string | null
          callsign?: string | null
          certupload?: string | null
          class?: string | null
          classcert?: string | null
          co2?: string | null
          console?: string | null
          crane?: string | null
          created_at?: string
          crewmatrix?: string | null
          delivery?: string | null
          doc?: string | null
          doccert?: string | null
          draft?: string | null
          dwt?: string | null
          ecdis?: string | null
          enginemodel?: string | null
          enginepower?: string | null
          familiar?: string | null
          flag?: string | null
          gmdss?: string | null
          gt?: string | null
          gyro?: string | null
          hatch?: string | null
          hullno?: string | null
          id?: string
          imo?: string
          incinerator?: string | null
          insurer?: string | null
          iopp?: string | null
          ism?: string | null
          issc?: string | null
          keeldate?: string | null
          lastchange?: string | null
          lastdock?: string | null
          loa?: string | null
          magcompass?: string | null
          mainengine?: string | null
          majorrepair?: string | null
          manuals?: string | null
          mgr?: string | null
          mlc?: string | null
          name?: string
          nextcrew?: string | null
          nextdock?: string | null
          nt?: string | null
          operator?: string | null
          owner?: string | null
          ownerinstruct?: string | null
          ows?: string | null
          pi?: string | null
          plans?: string | null
          pmslink?: string | null
          propeller?: string | null
          pump?: string | null
          radar?: string | null
          rotation?: string | null
          safeequip?: string | null
          safemanning?: string | null
          scrubber?: string | null
          sewage?: string | null
          shaftgen?: string | null
          smc?: string | null
          tsuper?: string | null
          type?: string | null
          updated_at?: string
          vdr?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
