package edu.kh.project.member.model.dao;

import org.springframework.stereotype.Repository;

import edu.kh.project.member.model.vo.Member;

@Repository // 퍼시스턴스 레이어, 영속성(파일, DB)을 가진 클래스 + bean 등록
                              // -> 서버를 꺼도 유지됨
public class MemberDAO {

	/** 로그인 DAO
	 * @param memberEmail
	 * @return loginMember
	 */
	public Member login(String memberEmail) {


		return null;
	}

}
