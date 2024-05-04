import { defineStore } from "pinia";
import type { Member } from "@/interfaces";

interface State {
    memberList: Map<number, Member>;
}

export const useMembersStore = defineStore({
    id: "members",
    state: (): State => {
        return {
            memberList: new Map<number, Member>()
        };
    },
    getters: {
        getById: (state) => {
            return (id: number): Member => {
                const member = state.memberList.get(id) as Member;
                return member;
            };
        },
        isMemberListEmpty: (state): boolean => {
            return state.memberList.size == 0;
        }
    },
    actions: {
        prepareMemberList(): void {
            // 空のmemberListを用意
            let memberList = new Map<number, Member>();
            // セッションストレージからデータを取得
            const memberListJSONStr = sessionStorage.getItem("memberList");
            // セッションストレージのデータが空じゃないなら
            if (memberListJSONStr != undefined) {
                // JSON文字列をJSONオブジェクトに変換
                const memberListJSON = JSON.parse(memberListJSONStr);
                // JSONオブジェクトをもとにmemberListを生成
                memberList = new Map<number, Member>(memberListJSON);
            }
            // ステートにmemberListを格納
            this.memberList = memberList;
        },
        initList(): void {
            this.memberList.set(33456, {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note:"初回入会特権あり。"})
            this.memberList.set(44783, {id: 44873, name:"鈴木次郎", email: "mue@example.com", points: 53});
        },
        addMember(member: Member): void {
            this.memberList.set(member.id, member);
        }
    }
});